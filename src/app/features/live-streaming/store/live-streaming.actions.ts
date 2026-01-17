import { createAction, props } from '@ngrx/store';

export const loadViewGames = createAction(
  '[Live Streaming] Load View Games',
  props<{ sport: string }>()
);

export const loadViewGamesSuccess = createAction(
  '[Live Streaming] Load View Games Success',
  props<{ liveGames: LiveStreamGame[]; previousGames: LiveStreamGame[] }>()
);

export const loadViewGamesFailure = createAction(
  '[Live Streaming] Load View Games Failure',
  props<{ error: string }>()
);

export interface LiveStreamGame {
  gameId: number | string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  quarter?: string;
  imageHome?: string;
  imageAway?: string;
  isLive?: boolean;
  raw?: unknown;
}
