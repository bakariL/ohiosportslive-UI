import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import { UpcomingGamesResponse } from '../../../models/game-models';

@Injectable({ providedIn: 'root' })
export class GameListService {
  route = '/game-list';

  constructor(
         private http: HttpClient
              ) {
  }

  get(): Observable<UpcomingGamesResponse[]>{
    return this.http.get<{data: UpcomingGamesResponse[]}>(FluxConnections.FLUX_API_URI + 'api/Game/upcoming')
                    .pipe(
                      map((games: {data: UpcomingGamesResponse[]}) => games.data)
                    );
  }

}
