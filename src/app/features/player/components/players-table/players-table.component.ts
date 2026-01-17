import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface PlayerStatLine {
  player: string;
  min: string;
  fgm: number;
  fga: number;
  pts: number;
}

interface PlayerRow extends PlayerStatLine {
  id: string;
}

interface PlayerMock {
  id: string;
  name: string;
  teams: Array<'home' | 'away' | 'alt'>;
  box: PlayerStatLine;
  team: PlayerStatLine;
}

@Component({
  selector: 'osl-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css'],
})
export class PlayersTableComponent {
  @Input() teamKey: 'home' | 'away' | 'alt' = 'home';
  @Input() mode: 'box' | 'team' | 'social' = 'box';

  expanded = false;

  constructor(private router: Router) {}

  private players: PlayerMock[] = [
    {
      id: 'peter-thornton',
      name: 'DeAndre Hunter',
      teams: ['home', 'away'],
      box: { player: 'DeAndre Hunter', min: '16:43', fgm: 6, fga: 9, pts: 14 },
      team: { player: 'DeAndre Hunter', min: '18:20', fgm: 7, fga: 11, pts: 18 },
    },
    {
      id: 'saddiq-bey',
      name: 'Saddiq Bey',
      teams: ['home', 'away'],
      box: { player: 'Saddiq Bey', min: '15:00', fgm: 4, fga: 8, pts: 9 },
      team: { player: 'Saddiq Bey', min: '19:04', fgm: 5, fga: 10, pts: 12 },
    },
    {
      id: 'onyeka-okongwu',
      name: 'Onyeka Okongwu',
      teams: ['home', 'away'],
      box: { player: 'Onyeka Okongwu', min: '26:21', fgm: 4, fga: 7, pts: 10 },
      team: { player: 'Onyeka Okongwu', min: '22:50', fgm: 6, fga: 9, pts: 14 },
    },
    {
      id: 'aj-griffin',
      name: 'AJ Griffin',
      teams: ['home', 'away', 'alt'],
      box: { player: 'AJ Griffin', min: '29:20', fgm: 5, fga: 13, pts: 13 },
      team: { player: 'AJ Griffin', min: '21:12', fgm: 4, fga: 10, pts: 11 },
    },
    {
      id: 'aaron-holiday',
      name: 'Aaron Holiday',
      teams: ['home', 'away', 'alt'],
      box: { player: 'Aaron Holiday', min: '31:19', fgm: 5, fga: 12, pts: 7 },
      team: { player: 'Aaron Holiday', min: '20:33', fgm: 3, fga: 7, pts: 8 },
    },
    {
      id: 'jalen-johnson',
      name: 'Jalen Johnson',
      teams: ['home', 'away'],
      box: { player: 'Jalen Johnson', min: '18:30', fgm: 3, fga: 7, pts: 8 },
      team: { player: 'Jalen Johnson', min: '17:41', fgm: 3, fga: 6, pts: 7 },
    },
    {
      id: 'trent-forrest',
      name: 'Trent Forrest',
      teams: ['home'],
      box: { player: 'Trent Forrest', min: '16:41', fgm: 2, fga: 5, pts: 4 },
      team: { player: 'Trent Forrest', min: '14:10', fgm: 2, fga: 4, pts: 4 },
    },
    {
      id: 'garrison-matthews',
      name: 'Garrison Matthews',
      teams: ['away'],
      box: { player: 'Garrison Matthews', min: '25:36', fgm: 4, fga: 11, pts: 9 },
      team: { player: 'Garrison Matthews', min: '22:36', fgm: 4, fga: 10, pts: 9 },
    },
  ];

  get displayRows(): PlayerRow[] {
    const list = this.players
      .filter((player) => player.teams.includes(this.teamKey))
      .map((player) => ({
        id: player.id,
        ...(this.mode === 'team' ? player.team : player.box),
      }));

    return this.expanded ? list : list.slice(0, 6);
  }

  get hasMore(): boolean {
    return (
      this.players.filter((player) => player.teams.includes(this.teamKey)).length >
      6
    );
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  goToPlayer(id: string): void {
    this.router.navigate(['/player', id]);
  }
}
