import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { UpcomingGame } from '../../../models/game-models';


export interface UpcomingGameState extends EntityState<UpcomingGame> {}

export const getInitialState =() =>{
    return {
        upcomingGames:[],
        isLoaded: false,
    };
};

@Injectable({ providedIn: 'root'})
@StoreConfig({ name:'upcomingGames' })
export class UpcomingGamesStore extends EntityStore<UpcomingGameState>{
    constructor(){
        super();
    }
}
