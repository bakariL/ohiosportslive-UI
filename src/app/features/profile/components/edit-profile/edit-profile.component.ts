import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'osl-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  profile = {
    name: 'Alex Morgan',
    email: 'alex.morgan@email.com',
    phone: '(614) 555-0218',
    location: 'Marion, OH',
    bio: 'Passionate about Ohio high school sports and live streaming.',
  };

  constructor(private router: Router) {}

  save(): void {
    this.router.navigate(['/profile']);
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
