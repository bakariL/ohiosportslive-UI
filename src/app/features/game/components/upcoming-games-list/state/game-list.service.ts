import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import { FluxState } from 'src/app/shared/odata/odata-query';
import { UpcomingGamesResponse } from '../../../models/game-models';
import { UpcomingGameListOdataStateStore } from './game-list-odata-state.store';
import { GameList, UpcomingGamesList } from './game-list.model';
import { GameListStore } from './game-list.store';

@Injectable({ providedIn: 'root' })
export class GameListService {
  route = '/game-list';

  constructor(
               private gameListStore: GameListStore
              , private http: HttpClient
              ,protected upcomingGameListStateStore: UpcomingGameListOdataStateStore
              , ) {
  }

  // get(odataState: FluxState<UpcomingGamesList>): Observable<void> {
  //     this.gameListStore.setLoading(true);
  //     console.log('service game state layer here..........')
  //     //this.upcomingGameListStateStore.update({ odataState });
  //     return this.http.get<UpcomingGamesList[]>( FluxConnections.FLUX_API_URI + 'api/Game/upcoming')
  //     .pipe( 
  //       map(upcomingGames => {
  //         console.log(upcomingGames, ' :: return obj upcoming games yay!')
  //           this.gameListStore.set(upcomingGames);
  //           this.gameListStore.setLoading(false);
  //       }),
  //     );    
  // }

  get(): Observable<UpcomingGamesResponse[]>{
    return this.http.get<{data: UpcomingGamesResponse[]}>(FluxConnections.FLUX_API_URI + 'api/Game/upcoming')
                    .pipe(
                      map((games: {data: UpcomingGamesResponse[]}) => games.data)
                    );
  }

  add(gameList: GameList) {
    this.gameListStore.add(gameList);
  }

  update(id: string, gameList: Partial<GameList>) {
    this.gameListStore.update(id, gameList);
  }

  remove(id: string) {
    this.gameListStore.remove(id);
  }

  setActive(id: string){
    this.gameListStore.setActive(id);
  }

}
