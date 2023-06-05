import { HttpClient } from '@angular/common/http';
import { HtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import {
  AllGames,
  NewGame,
  PreviousGames,
  TodaysGames,
  UpcomingGame,
  UpcomingGamesResponse,
  ViewGame,
} from '../models/game-models';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private _http: HttpClient) {}

  createNewGame(game: NewGame): Observable<NewGame> {
    console.log('create' + game);
    return this._http.post<NewGame>(
      FluxConnections.FLUX_API_URI + 'api/Game/new-game/',
      game
    ).pipe(
      retry(1)
    );
  }

  getGame(gameId: number): Observable<ViewGame> {
    console.log(' service: ' + gameId);
    return this._http.get<ViewGame>(
      FluxConnections.FLUX_API_URI + 'api/Game/view/' + gameId
    );
  }

  getListofAllGames(): Observable<AllGames[]> {
    return this._http
      .get<AllGames[]>(FluxConnections.FLUX_API_URI + 'api/Game/viewAll')
      .pipe(
        retry(1)
        // catchError("wewe")
      );
  }

  getListofTodaysGames(): Observable<TodaysGames[]> {
    return this._http
      .get<TodaysGames[]>(FluxConnections.FLUX_API_URI + 'api/Game/today')
      .pipe(
        retry(1)
        // catchError("wewe")
      );
  }

  getListofUpcomingGames(): Observable<UpcomingGamesResponse[]> {
    return this._http
      .get<UpcomingGamesResponse[]>(
        FluxConnections.FLUX_API_URI + 'api/Game/upcoming'
      )
      .pipe(
        retry(1)
        // catchError("wewe")
    );
 
  }

  

  getListofPreviousGames(): Observable<PreviousGames[]> {
    return this._http
      .get<PreviousGames[]>(
        FluxConnections.FLUX_API_URI + 'api/Game/previousGames'
      )
      .pipe(
        retry(1)
        // catchError("wewe")
      );
  }

  getListofLiveYouTubeSportsVideos(): Observable<any[]> {
    return this._http.get<any[]>(
      FluxConnections.FLUX_API_URI + 'api/Game/viewAllYt'
    );
  }

  updateGame(game: UpcomingGame): Observable<UpcomingGame> {
    return this._http.post<UpcomingGame>(
      FluxConnections.FLUX_API_URI + '',
      game
    );
  }

  deleteGame(game: UpcomingGame): Observable<UpcomingGame> {
    return this._http.post<UpcomingGame>(
      FluxConnections.FLUX_API_URI,
      game
    );
  }

  watchGame(game: UpcomingGame): Observable<UpcomingGame> {
    return this._http.get<UpcomingGame>(FluxConnections.FLUX_API_URI + '');
  }

  acceptGame(game: ViewGame): Observable<ViewGame> {
    return this._http.post<ViewGame>(
      FluxConnections.FLUX_API_URI + 'api/Games/view/{gameId}/accept',
      game
    );
  }

  getAccetpedGameList(games: ViewGame): Observable<ViewGame[]> {
    return this._http.get<ViewGame[]>(FluxConnections.FLUX_API_URI + '');
  }
}
