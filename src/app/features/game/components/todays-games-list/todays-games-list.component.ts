import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodaysGames } from '../../models/game-models';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'todays-games-list',
  templateUrl: './todays-games-list.component.html',
  styleUrls: ['./todays-games-list.component.css'],
})
export class TodaysGamesListComponent implements OnInit {
  gameList: TodaysGames[] = [];

  constructor(private _gameService: GameService, private _router: Router) {}

  ngOnInit() {
    return this.loadTodaysGames();
  }

  loadTodaysGames() {
    return this._gameService.getListofTodaysGames().subscribe((val) => {
      this.gameList = val;
    });
  }
}
