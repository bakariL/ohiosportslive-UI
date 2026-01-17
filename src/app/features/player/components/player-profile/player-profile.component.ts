import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ShareDialogComponent } from 'src/app/shared/share-dialog/share-dialog.component';
import { FollowService } from 'src/app/shared/services/follow.service';

@Component({
  selector: 'osl-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css'],
})
export class PlayerProfileComponent {
  playerId: string;
  playerName = 'Peter Thornton';
  playerPhotoUrl = 'assets/images/stow_vs_northRoyalton_example.jpg';
  isFollowing = false;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private followService: FollowService
  ) {
    this.playerId = this.route.snapshot.paramMap.get('id') ?? 'player';
    this.isFollowing = this.followService.isFollowing('player', this.playerId);
  }

  openShare(): void {
    this.dialog.open(ShareDialogComponent, {
      data: {
        title: 'Player profile',
        url: window.location.href,
      },
      panelClass: 'share-dialog-panel',
      backdropClass: 'share-dialog-backdrop',
      autoFocus: false,
      restoreFocus: false,
    });
  }

  toggleFollow(): void {
    this.followService.toggleFollow({ id: this.playerId, name: this.playerName, type: 'player' });
    this.isFollowing = this.followService.isFollowing('player', this.playerId);
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.playerPhotoUrl = String(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
