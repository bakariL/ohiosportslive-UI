import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'osl-sport-home',
  templateUrl: './sport-home.component.html',
  styleUrls: ['./sport-home.component.css'],
})
export class SportHomeComponent implements OnInit {
  sportLabel = 'Basketball';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.sportLabel = data['sport'] ?? 'Basketball';
    });
  }
}
