import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { Game } from '../../models/game-models';
import { loadGames } from '../../store/game.actions';
import { selectGames } from '../../store/game.selectors';
import { GameService } from '../../services/game.service';
import { CreateNewGameState } from '../create/state/create-new-game-state.model';
import { CreateNewGameStateService } from '../create/state/create-new-game-state.service';


@UntilDestroy()
@Component({
  selector: 'upcoming-games-list',
  templateUrl: './upcoming-games-list.component.html',
  styleUrls: ['./upcoming-games-list.component.css'],
})
export class UpcomingGamesListComponent implements OnInit {
  games$: Observable<Game[]> = of([]);
  youtubeLiveSports: any[] = [];
  isLoading = false;

  constructor(
    private _router: Router,
    private store: Store,
    private _gameService: GameService,
    private _createNewGameService: CreateNewGameStateService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadGames());
    this.games$ = this.store.pipe(select(selectGames));
  }

  createNewGame(game: CreateNewGameState) {
    this._createNewGameService.add(game);
  }

  loadLiveYoutubeSportsGames() {
    return this._gameService
      .getListofLiveYouTubeSportsVideos()
      .subscribe((val: any[]) => {
        this.youtubeLiveSports = val;
      });
  }

  addNew() {
    this._router.navigateByUrl('games/add');
  }

  watchYTvideo() {
    this._router.navigateByUrl('/team/new-team');
  }

  getGame(id: number) {
    this._gameService.getGame(id).subscribe((data: unknown) => {
      this._router.navigateByUrl('games/' + id);
      //this.game = data
    });
  }
}
