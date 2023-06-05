import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationModel } from '../../../models/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this._authService
      .registerSubmit(this.form.getRawValue())
      .subscribe((data: RegistrationModel) => {
        console.warn(data + ' : register here.');
        this._router.navigate(['/login']);
      });
  }
}
