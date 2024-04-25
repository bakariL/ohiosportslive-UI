import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as GameActions from './game.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameService } from '../services/game.service';
import { Injectable } from '@angular/core';


@Injectable()
export class GameEffects {

    constructor(
        private actions$: Actions,
        private gameService: GameService
      ) {}

    loadGames$ = createEffect(() => 
     this.actions$.pipe(
        ofType(GameActions.loadGames),
        switchMap(() => 
         this.gameService.getGames().pipe(
            map(games => GameActions.loadGamesSuccess({ games })),
            catchError(() => of({ type: 'Load Games Error'}))
         ))
     ))

    

     
}