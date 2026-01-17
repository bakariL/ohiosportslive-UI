import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      Email_Address: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (!this.form.valid) {
      for (const controlName in this.form.controls) {
        this.form.controls[controlName].markAsDirty();
        this.form.controls[controlName].updateValueAndValidity();
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
