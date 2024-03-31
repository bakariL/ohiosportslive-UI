import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osl-home-livestreaming-games',
  templateUrl: './homepage-livestream-games.component.html',
  styleUrls: ['./homepage-livestream-games.component.css']
})
export class HomeLivestreamingGamesComponent implements OnInit {
  ngOnInit(): void {}


  livestreamingGames: any[] = [
    // Array of game data
    { scoreA: 52, scoreB: 61, teamA: 'Team A', teamB: 'Team B', image1: 'path/to/your/image1.jpg', image2: 'path/to/your/image2.jpg', quarter: '3' },
    // Add more game data as needed
  ];
}
