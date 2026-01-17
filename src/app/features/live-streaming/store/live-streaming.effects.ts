import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameService } from '../../game/services/game.service';
import * as LiveStreamingActions from './live-streaming.actions';

@Injectable()
export class LiveStreamingEffects {
  constructor(private actions$: Actions, private gameService: GameService) {}

  loadViewGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LiveStreamingActions.loadViewGames),
      switchMap(({ sport }) =>
        this.gameService.getViewGamesBySport(sport).pipe(
          map((games) => {
            const mapped = games.map((game) => this.mapViewGame(game));
            const liveGames = mapped.filter((game) => game.isLive);
            const previousGames = mapped.filter((game) => !game.isLive);
            return LiveStreamingActions.loadViewGamesSuccess({
              liveGames,
              previousGames,
            });
          }),
          catchError((error) =>
            of(
              LiveStreamingActions.loadViewGamesFailure({
                error: this.normalizeError(error),
              })
            )
          )
        )
      )
    )
  );

  private mapViewGame(
    game: import('../../game/models/game-models').ViewGame | Record<string, unknown>
  ): LiveStreamingActions.LiveStreamGame {
    const record = game as Record<string, unknown>;
    const homeTeam =
      this.readString(record, 'homeTeam') ||
      this.readString(record, 'home_team_1') ||
      this.readString(record, 'teamA') ||
      'Home';
    const awayTeam =
      this.readString(record, 'awayTeam') ||
      this.readString(record, 'away_team_2') ||
      this.readString(record, 'teamB') ||
      'Away';
    const quarter = this.readString(record, 'quarter') || this.readString(record, 'period');
    const status = this.readString(record, 'status') || this.readString(record, 'gameStatus');
    const isLive =
      this.readBoolean(record, 'isLive') ||
      status?.toLowerCase() === 'live' ||
      (quarter ? quarter.toLowerCase() !== 'final' : false);
    return {
      gameId: this.readString(record, 'gameId') || this.readString(record, 'id') || '',
      homeTeam,
      awayTeam,
      homeScore: this.readNumber(record, 'homeScore') ?? this.readNumber(record, 'scoreA'),
      awayScore: this.readNumber(record, 'awayScore') ?? this.readNumber(record, 'scoreB'),
      quarter: quarter ?? (isLive ? 'Live' : 'Final'),
      imageHome:
        this.readString(record, 'image1') ||
        this.readString(record, 'homeImage') ||
        this.readString(record, 'imG_PATH'),
      imageAway:
        this.readString(record, 'image2') ||
        this.readString(record, 'awayImage') ||
        this.readString(record, 'imG_PATH'),
      isLive,
      raw: record,
    };
  }

  private readString(game: Record<string, unknown>, key: string): string | undefined {
    const value = game[key];
    return typeof value === 'string' ? value : undefined;
  }

  private readNumber(game: Record<string, unknown>, key: string): number | undefined {
    const value = game[key];
    if (typeof value === 'number') {
      return value;
    }
    if (typeof value === 'string') {
      const parsed = Number.parseFloat(value);
      return Number.isFinite(parsed) ? parsed : undefined;
    }
    return undefined;
  }

  private readBoolean(game: Record<string, unknown>, key: string): boolean {
    const value = game[key];
    return typeof value === 'boolean' ? value : false;
  }

  private normalizeError(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }
    if (error && typeof error === 'object') {
      const anyError = error as { message?: unknown };
      if (typeof anyError.message === 'string') {
        return anyError.message;
      }
    }
    return 'Failed to load games.';
  }
}
