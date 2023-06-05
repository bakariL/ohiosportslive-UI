import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-list-full-page',
  templateUrl: './game-list-full-page.component.html',
  styleUrls: ['./game-list-full-page.component.css'],
})
export class GameListFullPageComponent implements OnInit {
  constructor(private _gameService: GameService, private _router: Router) {}

  ngOnInit() {}

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
