import { Component, Input } from '@angular/core';

@Component({
  selector: 'osl-live-scores',
  templateUrl: './live-scores.component.html',
  styleUrls: ['./live-scores.component.css']
})
export class LiveScoresComponent {
  @Input() showViewAll = true;
  games = [
    { gameId: 1, homeScore: 52, awayScore: 61, quarter: 'Q3', homeTeam: 'TeamName A', awayTeam: 'TeamName B' },
    { gameId: 2, homeScore: 48, awayScore: 55, quarter: 'Q4', homeTeam: 'TeamName C', awayTeam: 'TeamName D' },
    { gameId: 3, homeScore: 67, awayScore: 69, quarter: 'Q2', homeTeam: 'TeamName E', awayTeam: 'TeamName F' },
    { gameId: 4, homeScore: 73, awayScore: 70, quarter: 'Q1', homeTeam: 'TeamName G', awayTeam: 'TeamName H' },
  ];

}
