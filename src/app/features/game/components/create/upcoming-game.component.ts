import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { of, pipe } from 'rxjs';
import { FileUploadService } from 'src/app/shared/file-upload/file-upload.service';
import { NewGame } from '../../models/game-models';
import { GameService } from '../../services/game.service';
import { GameListState } from '../upcoming-games-list/state/game-list.store';
import { CreateNewGameState } from './state/create-new-game-state.model';
import { CreateNewGameStateQuery } from './state/create-new-game-state.query';
import { CreateNewGameStateService } from './state/create-new-game-state.service';
import { CreateNewGameStateStore } from './state/create-new-game-state.store';

@Component({
  selector: 'app-upcoming-game',
  templateUrl: './upcoming-game.component.html',
  styleUrls: ['./upcoming-game.component.scss'],
})
export class UpcomingGameComponent implements OnInit {

  upcomingGameData!: NewGame
  // newGame = new CreateNewGameState 
  // {id = '',homeTeam = '',awayTeam='', location=''};


  constructor(
    private _gameService: GameService,
    private _createGameService: CreateNewGameStateService,
    private formBuilder: UntypedFormBuilder,
    private _router: Router,
    private _fileService: FileUploadService,
    private _createGameQuery: CreateNewGameStateQuery,
     private _createGameStore: CreateNewGameStateStore
  ) {}
  createUpcomingGameForm = new FormGroup({
    id: new FormControl(''),
    homeTeam: new FormControl(''),
    awayTeam: new FormControl(''),
    location: new FormControl(''),
    // dateOfGame: new FormControl(new Date().toISOString()),
    // imgPath: new FormControl(''),
    // description: new FormControl(''),
    // ticketPrice: new FormControl('')
  });

  ngOnInit(): void {
    this.createUpcomingGameForm.reset();
   
  }

  // createNewGame(game: CreateNewGameState) {
  //   this._createGameStore.setLoading(true);
  //   this._createGameService.add(game);
  //   console.log(game, ' addded gae her <<<')
  //   this._router.navigate(['/games/view']);
  // }

  createNewGame(){
    // this.newGame = this.createUpcomingGameForm.value
    // this._createGameService.add(this.newGame);
  }

}

