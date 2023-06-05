import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { UpcomingGame } from "../../../models/game-models";
import { ViewUpcomingGameState, ViewUpcomingGameStore } from "./store";


export class ViewUpcomingGameQuery extends Query<ViewUpcomingGameState>{
        //injceting
        constructor(private upcomingGameStore: ViewUpcomingGameStore) {
            super(upcomingGameStore);
            
        }

        get(): Observable<UpcomingGame>{
            return this.select(state =>state.game);
        }

        getLoaded(): Observable<boolean>{
            return this.select(state => state.isLoaded);
        }

        getLoading(): Observable<boolean>{
            return this.selectLoading();
        }
}