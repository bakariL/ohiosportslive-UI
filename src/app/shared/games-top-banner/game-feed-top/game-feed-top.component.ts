import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { of } from 'rxjs';;
import { GameService } from '../../../features/game/services/game.service';
import { UpcomingGamesResponse } from '../../../features/game/models/game-models';


@UntilDestroy()
@Component({
  selector: 'osl-game-feed-top',
  templateUrl: './game-feed-top.component.html',
  styleUrls: ['./game-feed-top.component.css']
})
export class GameFeedTopComponent implements OnInit, OnDestroy {
  gameList$ =  of<UpcomingGamesResponse[]>();
  isLoading = of<boolean>();


  activeGame = of<string>();

  youtubeLiveSports: any[] = [];

  constructor(  private _gameService: GameService, 
    private _router: Router,    

 ) {}
  ngOnInit() {
    this.gameList$ = of([
      {
        gameId: 1,
        homeTeam: 'PHS',
        awayTeam: 'BW',
        location: 'Stadium 1',
        imgPath: '',
        description: 'Mon 7:30 PM',
        games: [],
      },
      {
        gameId: 2,
        homeTeam: 'PHS',
        awayTeam: 'BW',
        location: 'Stadium 2',
        imgPath: '',
        description: 'Mon 7:30 PM',
        games: [],
      },
      {
        gameId: 3,
        homeTeam: 'PHS',
        awayTeam: 'BW',
        location: 'Stadium 3',
        imgPath: '',
        description: 'Mon 7:30 PM',
        games: [],
      },
      {
        gameId: 4,
        homeTeam: 'PHS',
        awayTeam: 'BW',
        location: 'Stadium 4',
        imgPath: '',
        description: 'Mon 7:30 PM',
        games: [],
      },
      {
        gameId: 5,
        homeTeam: 'PHS',
        awayTeam: 'BW',
        location: 'Stadium 5',
        imgPath: '',
        description: 'Mon 7:30 PM',
        games: [],
      },
    ]);


  }
  ngOnDestroy() {}


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

