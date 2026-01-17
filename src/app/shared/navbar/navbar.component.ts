import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'osl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchQuery = '';

  constructor(private router: Router) {}

  submitSearch(): void {
    const query = this.searchQuery.trim();
    if (!query) {
      return;
    }
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}
