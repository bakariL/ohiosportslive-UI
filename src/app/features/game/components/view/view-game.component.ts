import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css'],
})
export class ViewGameComponent implements OnInit {
  gameId = '';
  title = 'Henryetta High School vs Mounds High School';
  meta = 'Basketball · Boys · Marion, OH';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId') ?? '';
  }
}
