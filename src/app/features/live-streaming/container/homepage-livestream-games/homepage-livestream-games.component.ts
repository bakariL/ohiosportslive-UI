import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadViewGames } from '../../store/live-streaming.actions';
import {
  selectLiveGames,
  selectLiveStreamingSport,
  selectPreviousGames,
} from '../../store/live-streaming.selectors';
import { LiveStreamGame } from '../../store/live-streaming.actions';

@Component({
  selector: 'osl-home-livestreaming-games',
  templateUrl: './homepage-livestream-games.component.html',
  styleUrls: ['./homepage-livestream-games.component.css']
})
export class HomeLivestreamingGamesComponent implements OnInit {
  livestreamingGames$: Observable<LiveStreamGame[]> = this.store.pipe(
    select(selectLiveGames)
  );
  previousGames$: Observable<LiveStreamGame[]> = this.store.pipe(
    select(selectPreviousGames)
  );
  selectedSport$: Observable<string> = this.store.pipe(
    select(selectLiveStreamingSport)
  );
  sports = ['Boys Basketball', 'Girls Basketball', 'Football', 'Volleyball'];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadSport(this.sports[0]);
  }

  loadSport(sport: string): void {
    this.store.dispatch(loadViewGames({ sport }));
  }
}
