import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import { Team } from '../models/Team';

export interface TeamPlayer {
  id: string;
  name: string;
  detail: string;
  position: string;
  grade: string;
}

export interface TeamStat {
  label: string;
  value: string | number;
}

export interface TeamGame {
  id: string;
  date: string;
  time: string;
  opponent: string;
  location: string;
  homeAway: 'Home' | 'Away' | 'Neutral';
  status: 'Upcoming' | 'Final' | 'Live';
  teamScore?: number;
  opponentScore?: number;
  year: string;
}

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

  getTeamPlayers(teamId: string): Observable<TeamPlayer[]> {
    return this._http
      .get<TeamPlayer[]>(`${FluxConnections.FLUX_API_URI}api/Team/${teamId}/players`)
      .pipe(retry(2));
  }

  getTeamStats(teamId: string): Observable<TeamStat[]> {
    return this._http
      .get<TeamStat[]>(`${FluxConnections.FLUX_API_URI}api/Team/${teamId}/stats`)
      .pipe(retry(2));
  }

  getTeamScheduleYears(teamId: string): Observable<string[]> {
    return this._http
      .get<string[]>(`${FluxConnections.FLUX_API_URI}api/Team/${teamId}/schedule/years`)
      .pipe(retry(2));
  }

  getTeamSchedule(teamId: string, year: string): Observable<TeamGame[]> {
    const params = new HttpParams().set('year', year);
    return this._http
      .get<TeamGame[]>(`${FluxConnections.FLUX_API_URI}api/Team/${teamId}/schedule`, { params })
      .pipe(retry(2));
  }

  getPastGames(teamId: string): Observable<TeamGame[]> {
    return this._http
      .get<TeamGame[]>(`${FluxConnections.FLUX_API_URI}api/Team/${teamId}/games/past`)
      .pipe(retry(2));
  }

  // getTeamIndex() : Observable<Team>{
  //     return this._http.get<Team>(this.apiUrl + 'api/Team/');
  // }
}
