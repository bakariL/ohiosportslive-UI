import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css'],
})
export class ViewGameComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('okkk' + this.route.snapshot.paramMap.get('gameId'));
  }
}
