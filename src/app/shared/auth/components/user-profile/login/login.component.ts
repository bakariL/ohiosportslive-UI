import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ChildActivationStart, Router } from '@angular/router';
import { LoginModel } from '../../../models/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  invalidLogin: boolean = true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      userName: '',
    });
  }

  login(): void {
    var isChecked = true;

    if (!this.form.valid) {
      for (var a in this.form.controls) {
        this.form.controls[a].markAsDirty();
        this.form.controls[a].updateValueAndValidity();
        isChecked = false;
      }
    }
    if (this.form.valid) {
      this._authService.loginSubmit(this.form.value).subscribe(
        (response) => {
          const token = (<any>response).token;
          localStorage.setItem('token', token);
          this.invalidLogin = false;
          this.form.reset();
          this._router.navigate(['/']);
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
    }
  }
}
