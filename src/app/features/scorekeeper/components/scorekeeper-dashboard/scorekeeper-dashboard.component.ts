import { Component } from '@angular/core';

@Component({
  selector: 'osl-scorekeeper-dashboard',
  templateUrl: './scorekeeper-dashboard.component.html',
  styleUrls: ['./scorekeeper-dashboard.component.css'],
})
export class ScorekeeperDashboardComponent {
  homeScore = 0;
  awayScore = 0;
  period = 1;
  possession: 'home' | 'away' = 'home';

  incrementHome(amount: number): void {
    this.homeScore += amount;
  }

  incrementAway(amount: number): void {
    this.awayScore += amount;
  }

  incrementPeriod(): void {
    this.period += 1;
  }

  togglePossession(team: 'home' | 'away'): void {
    this.possession = team;
  }

  resetScores(): void {
    this.homeScore = 0;
    this.awayScore = 0;
    this.period = 1;
    this.possession = 'home';
  }
}
