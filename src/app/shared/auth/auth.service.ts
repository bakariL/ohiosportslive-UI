import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  IsLoggedIn() {
    let x = !!localStorage.getItem('token');
    console.log(x + 'asdf');
    return x;
  }
}
