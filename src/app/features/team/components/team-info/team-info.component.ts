import { Component, Input } from '@angular/core';

interface TeamMock {
  key: 'home' | 'away' | 'alt';
  id: string;
  short: string;
  name: string;
  score: number;
}

@Component({
  selector: 'osl-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent {
  @Input() teamKey: 'home' | 'away' | 'alt' = 'home';
  @Input() variant: 'score' | 'heading' = 'score';
  @Input() flip = false;

  private teams: TeamMock[] = [
    {
      key: 'home',
      id: 'henryetta-high-school',
      short: 'PHS',
      name: 'Henryetta High School',
      score: 93,
    },
    {
      key: 'away',
      id: 'mounds-high-school',
      short: 'BW',
      name: 'Mounds High School',
      score: 137,
    },
    {
      key: 'alt',
      id: 'ohio-sports-live',
      short: 'OSL',
      name: 'Ohio Sports Live',
      score: 0,
    },
  ];

  get team(): TeamMock {
    return (
      this.teams.find((team) => team.key === this.teamKey) ?? this.teams[0]
    );
  }
}
