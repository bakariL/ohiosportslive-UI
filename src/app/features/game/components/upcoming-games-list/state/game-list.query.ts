import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GameListStore, GameListState } from './game-list.store';

@Injectable({ providedIn: 'root' })
export class GameListQuery extends QueryEntity<GameListState> {

  constructor(protected store: GameListStore) {
    super(store);
  }

}
