import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { GameList } from './game-list.model';

export interface GameListState extends EntityState<GameList> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-list' })
export class GameListStore extends EntityStore<GameListState> {

  constructor() {
    super();
  }

}
