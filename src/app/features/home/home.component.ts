import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/shared/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _jwthelper: JwtHelperService
  ) {}

  ngOnInit(): void {}

  isUserAuthenticated() {
    const token = sessionStorage.getItem('jwt');
    if (token && !this._jwthelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    sessionStorage.removeItem('jwt');
    localStorage.removeItem('jwt');
  }
}
