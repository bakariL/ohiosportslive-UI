import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ShareDialogComponent } from 'src/app/shared/share-dialog/share-dialog.component';
import { TeamGame, TeamPlayer, TeamService, TeamStat } from '../../services/team.service';
import { FollowService } from 'src/app/shared/services/follow.service';

@Component({
  selector: 'osl-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css'],
})
export class TeamProfileComponent implements OnInit {
  teamId: string;
  activeTab: 'profile' | 'stats' | 'players' | 'schedule' | 'past' = 'profile';
  teamName = 'Henryetta High School';
  teamLogoUrl = 'assets/images/stow_vs_northRoyalton_example.jpg';
  isFollowing = false;

  players: TeamPlayer[] = [];
  teamStats: TeamStat[] = [];
  scheduleYears: string[] = [];
  selectedScheduleYear = '';
  scheduleGames: TeamGame[] = [];
  pastGames: TeamGame[] = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private teamService: TeamService,
    private followService: FollowService,
  ) {
    this.teamId = this.route.snapshot.paramMap.get('id') ?? 'team';
  }

  ngOnInit(): void {
    this.teamService.getTeamPlayers(this.teamId).subscribe((players) => (this.players = players));
    this.teamService.getTeamStats(this.teamId).subscribe((stats) => (this.teamStats = stats));
    this.teamService.getTeamScheduleYears(this.teamId).subscribe((years) => {
      this.scheduleYears = years;
      this.selectedScheduleYear = years[0] ?? '';
      if (this.selectedScheduleYear) {
        this.loadSchedule(this.selectedScheduleYear);
      }
    });
    this.teamService.getPastGames(this.teamId).subscribe((games) => (this.pastGames = games));
    this.isFollowing = this.followService.isFollowing('team', this.teamId);
  }

  openShare(): void {
    this.dialog.open(ShareDialogComponent, {
      data: {
        title: 'Team profile',
        url: window.location.href,
      },
      panelClass: 'share-dialog-panel',
      backdropClass: 'share-dialog-backdrop',
      autoFocus: false,
      restoreFocus: false,
    });
  }

  setActiveTab(tab: 'profile' | 'stats' | 'players' | 'schedule' | 'past'): void {
    this.activeTab = tab;
  }

  toggleFollow(): void {
    this.followService.toggleFollow({ id: this.teamId, name: this.teamName, type: 'team' });
    this.isFollowing = this.followService.isFollowing('team', this.teamId);
  }

  onLogoSelected(event: Event): void {
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

  onScheduleYearChange(year: string): void {
    this.selectedScheduleYear = year;
    this.loadSchedule(year);
  }

  private loadSchedule(year: string): void {
    this.teamService.getTeamSchedule(this.teamId, year).subscribe((games) => (this.scheduleGames = games));
  }
}
