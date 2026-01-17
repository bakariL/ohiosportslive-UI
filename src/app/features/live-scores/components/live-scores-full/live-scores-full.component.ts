import { Component } from '@angular/core';

@Component({
  selector: 'osl-live-scores-full',
  templateUrl: './live-scores-full.component.html',
  styleUrls: ['./live-scores-full.component.css'],
})
export class LiveScoresFullComponent {
  games = [
    { gameId: 1, homeScore: 93, awayScore: 137, quarter: 'Q3', homeTeam: 'PHS', awayTeam: 'BW' },
    { gameId: 2, homeScore: 65, awayScore: 71, quarter: 'Q4', homeTeam: 'STW', awayTeam: 'NR' },
    { gameId: 3, homeScore: 54, awayScore: 52, quarter: 'Q2', homeTeam: 'LHS', awayTeam: 'MHS' },
    { gameId: 4, homeScore: 78, awayScore: 74, quarter: 'Q1', homeTeam: 'RHS', awayTeam: 'PHS' },
  ];
}
