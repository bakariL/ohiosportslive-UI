import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { FluxState } from "src/app/shared/odata/odata-query";
import { UpcomingGame } from "../../../models/game-models";

export interface UpcomingGameOdataState {
    odataState: FluxState<UpcomingGame>;
    areFiltersApplied: boolean;
}

export const getUpcomingGameDefaultOdataState = (
    params: Partial<FluxState<UpcomingGame>>,
): UpcomingGameOdataState => ({
    odataState: {
        skip: 0,
        take: 20,
        sort: [
            {
                field: 'homeTeam',
                dir: 'asc',
            },
            {
                field: 'awayTeam',
                dir: 'asc',
            },
        ],
        select: [
            'gameId',
            'homeTeam',
            'awayTeam',
            'description',
            'imgPath',
            'location'
        ],
        filter: {
            logic: 'and',
            filters: [],
        },
    },
    areFiltersApplied: false,
    ...params,
});

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'upcoming-game-odata-state', resettable: true })
export class UpcomingGameOdataStateStore extends Store<UpcomingGameOdataState> {
    constructor() {
        super(getUpcomingGameDefaultOdataState({}));
    }
}