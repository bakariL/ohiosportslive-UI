import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreviousGames } from '../../models/game-models';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'previous-games-list',
  templateUrl: './previous-games-list.component.html',
  styleUrls: ['./previous-games-list.component.css'],
})
export class PreviousGamesListComponent implements OnInit {
  gameList: PreviousGames[] = [];

  constructor(private _gameService: GameService, private _router: Router) {}

  ngOnInit() {
    return this.loadPreviousGames();
  }

  loadPreviousGames() {
    return this._gameService.getListofPreviousGames().subscribe((val) => {
      this.gameList = val;
    });
  }
}
