import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  activeRole: 'Fan' | 'Player' | 'Coach' | 'Scorekeeper' | 'Event Organizer' | 'Administrator' = 'Fan';
  profilePhotoUrl?: string;
  teamLogoUrl?: string;
  highlightVideoName = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Role: [this.activeRole],
      TeamName: [''],
      School: [''],
      City: [''],
      State: [''],
      Height: [''],
      Weight: [''],
      Instagram: [''],
    });
  }

  submit(): void {
    this.form.patchValue({ Role: this.activeRole });
    this._authService
      .registerSubmit(this.form.getRawValue())
      .subscribe((data: RegistrationModel) => {
        if (this.activeRole === 'Scorekeeper') {
          this._router.navigate(['/scorekeeper']);
          return;
        }
        if (this.activeRole === 'Event Organizer') {
          this._router.navigate(['/event-organizer']);
          return;
        }
        this._router.navigate(['/auth/login']);
      });
  }

  setRole(role: 'Fan' | 'Player' | 'Coach' | 'Scorekeeper' | 'Event Organizer' | 'Administrator'): void {
    this.activeRole = role;
    this.form.patchValue({ Role: role });
  }

  onProfilePhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profilePhotoUrl = String(reader.result);
    };
    reader.readAsDataURL(file);
  }

  onTeamLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.teamLogoUrl = String(reader.result);
    };
    reader.readAsDataURL(file);
  }

  onHighlightVideoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    this.highlightVideoName = input.files[0].name;
  }
}
