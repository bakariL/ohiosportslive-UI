import { UpcomingGamesList } from "./game-list.model";
import { FluxState } from "src/app/shared/odata/odata-query";
import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";


export interface UpcomingGameListOdataState {
    odataState: FluxState<UpcomingGamesList>;
    areFiltersApplied: boolean;
}

export const getUpcomingGamesDefaultOdataState = (): UpcomingGameListOdataState => ({
    odataState: {
        skip:0,
        take:25,
        sort:[{field:'homeTeam', dir:'asc'}],
        filter:{
            logic:'and',
            filters:[],
        },
        select:[
            'gameId',
            'homeTeam',
            'awayTeam',
            'location',
            'imgPath',
            'description',
        ],
    },
    areFiltersApplied: false,
});

@Injectable({ providedIn:'root' })
@StoreConfig({name:'upcoming-games-odata-state', resettable: true})
export class UpcomingGameListOdataStateStore extends Store<UpcomingGameListOdataState>{
    constructor(){
        super(getUpcomingGamesDefaultOdataState());
    }
}