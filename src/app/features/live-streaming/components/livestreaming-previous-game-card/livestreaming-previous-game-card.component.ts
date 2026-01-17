import { Component, Input } from '@angular/core';

@Component({
  selector: 'osl-livestreaming-previous-game-card',
  templateUrl: './livestreaming-previous-game-card.component.html',
  styleUrls: ['./livestreaming-previous-game-card.component.css']
})
export class LivestreamingPreviousGameCardComponent {

  @Input() game: any; // Define the input property 'game'

  // // Declare a property named game
  // game: any = {
  //   scoreA: 52,
  //   scoreB: 61,
  //   image1: 'path/to/your/image1.jpg',
  //   image2: 'path/to/your/image2.jpg',
  //   quarter: 'Q3',
  //   teamA: 'TeamName A',
  //   teamB: 'TeamName B'
  // };

  constructor() {}
}
