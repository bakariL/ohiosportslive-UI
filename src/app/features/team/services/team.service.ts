import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private _http: HttpClient) {}

  createTeam(team: Team): Observable<Team> {
    return this._http
      .post<Team>(FluxConnections.FLUX_API_URI + 'api/Team/add/', team)
      .pipe(retry(2));
  }

  // getTeamIndex() : Observable<Team>{
  //     return this._http.get<Team>(this.apiUrl + 'api/Team/');
  // }
}
