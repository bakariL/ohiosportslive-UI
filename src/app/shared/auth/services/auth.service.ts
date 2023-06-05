import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { FluxConnections } from 'src/app/shared/constants/flux-connections';
import {
  LoginModel,
  RegistrationModel,
  UserModel,
  UserType,
} from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  registerSubmit(model: RegistrationModel): Observable<RegistrationModel> {
    console.warn(model + ' : register service.');
    return this._http
      .post<RegistrationModel>(
        FluxConnections.FLUX_API_URI + 'api/auth/signup',
        model
      )
      .pipe(retry(1));
  }

  loginSubmit(model: LoginModel): Observable<LoginModel> {
    return this._http.post<LoginModel>(
      FluxConnections.FLUX_API_URI + 'api/auth/login',
      model,
      { withCredentials: true }
    );
  }

  getCurrentUser(model: UserModel): Observable<UserModel> {
    return this._http.get<UserModel>(
      FluxConnections.FLUX_API_URI + 'api/auth/get-user'
    );
  }

  getUserType(): Observable<UserType> {
    return this._http.get<UserType>(FluxConnections.FLUX_API_URI + '');
  }

  IsLoggedInFlux(userName: string): Observable<boolean> {
    console.log('service   dsadasfdasdf');
    return this._http.get<boolean>(
      FluxConnections.FLUX_API_URI + 'api/auth/is-active'
    );
  }

  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
