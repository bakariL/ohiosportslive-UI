import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { of } from 'rxjs';;
import { GameService } from '../../services/game.service';
import { CreateNewGameState } from '../create/state/create-new-game-state.model';
import { CreateNewGameStateService } from '../create/state/create-new-game-state.service';
import { UpcomingGamesQuery } from '../create/state/upcoming-game-query';
import { UpcomingGamesStore } from '../create/state/upcoming-game-store';
import {  UpcomingGameOdataStateStore } from './state/upcoming-game-odata-state.store';
import { GameListService } from './state/game-list.service';
import { GameListState } from './state/game-list.store';
import { UpcomingGameOdataState } from './state/upcoming-game-odata-state.store';
import { UpcomingGamesResponse } from '../../models/game-models';


@UntilDestroy()
@Component({
  selector: 'upcoming-games-list',
  templateUrl: './upcoming-games-list.component.html',
  styleUrls: ['./upcoming-games-list.component.css'],
})
export class UpcomingGamesListComponent implements OnInit, OnDestroy {
  odataStoreState = of<UpcomingGameOdataState>();
  gameList$ =  of<UpcomingGamesResponse[]>();
  isLoading = of<boolean>();


  activeGame = of<string>();

  youtubeLiveSports: any[] = [];

  constructor(  private _gameService: GameService, 
    private _gameListService: GameListService,
    private _router: Router,    
    private _upcomingGameQuery: UpcomingGamesQuery,
    private _upcomingGameOdataStateQuery: UpcomingGameOdataStateStore,
    private _upcomingGameStore: UpcomingGamesStore,
    private _createNewGameService: CreateNewGameStateService
 ) {}
  ngOnInit() {


    this.gameList$ = this._upcomingGameQuery.getUpcomingGames();
    // console.log(this.gameList$, '  <<<<')

    // this.gameList = this._upcomingGameQuery.getUpcomingGames();
    // console.log('games: ', this.gameList)
    // this.odataStoreState = this._upcomingGameOdataStateQuery.select();

  }
  ngOnDestroy() {}

  // loadUpcomingGames(){
  //   // return this._gameService
  //   //       .getListofUpcomingGames()
  //   //       .subscribe((games) => {
  //   //         this.gameList = games;
  //   //       })
  // }

  createNewGame(game: CreateNewGameState){
    this._createNewGameService.add(game);
  }


  loadLiveYoutubeSportsGames() {
    return this._gameService
      .getListofLiveYouTubeSportsVideos()
      .subscribe((val) => {
        (this.youtubeLiveSports = val), console.log(this.youtubeLiveSports);
      });
  }

  addNew() {
    console.log('add new here');
    this._router.navigateByUrl('games/add');
  }

  watchYTvideo() {
    this._router.navigateByUrl('/team/new-team');
  }

  getGame(id: number) {
    this._gameService.getGame(id).subscribe((data) => {
      this._router.navigateByUrl('games/' + id);
      console.log('get game function hit :)  ');
      //this.game = data
    });
  }
}
