import { Component, OnInit } from '@angular/core';
import { FollowService, FollowedItem } from 'src/app/shared/services/follow.service';

@Component({
  selector: 'osl-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  user = {
    name: 'Alex Morgan',
    role: 'Athlete Supporter',
    location: 'Marion, OH',
    email: 'alex.morgan@email.com',
    phone: '(614) 555-0218',
    memberSince: 'Aug 2023',
  };

  favorites = ['Henryetta High School', 'Stow High School', 'Marion HS'];

  followedTeams: FollowedItem[] = [];
  followedPlayers: FollowedItem[] = [];

  recentActivity = [
    'Watched Henryetta vs Mounds — Jan 12, 2026',
    'Followed Marion HS — Jan 04, 2026',
    'Purchased 2 tickets — Dec 18, 2025',
  ];

  constructor(private followService: FollowService) {}

  ngOnInit(): void {
    this.refreshFollowing();
  }

  private refreshFollowing(): void {
    const items = this.followService.getFollowedItems();
    this.followedTeams = items.filter((item) => item.type === 'team');
    this.followedPlayers = items.filter((item) => item.type === 'player');
  }
}
