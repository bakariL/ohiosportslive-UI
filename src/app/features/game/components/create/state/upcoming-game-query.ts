import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable, tap } from "rxjs";
import { UpcomingGamesResponse } from "../../../models/game-models";
import { GameService } from "../../../services/game.service";
import { UpcomingGamesStore, UpcomingGameState } from "./upcoming-game-store";


@Injectable({ providedIn: 'root' })
export class UpcomingGamesQuery extends QueryEntity<UpcomingGameState>{

    constructor(protected _upcomingGamesStore: UpcomingGamesStore, 
             private _gameService: GameService, 
) {
        super(_upcomingGamesStore);
    }

    getUpcomingGames(): Observable<UpcomingGamesResponse[]> {
        return this._gameService.getListofUpcomingGames()
                .pipe(upcomingGames => (upcomingGames)  
                )
    }
}