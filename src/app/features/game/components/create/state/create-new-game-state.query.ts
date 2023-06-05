import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CreateNewGameStateStore, CreateNewGameStateState } from './create-new-game-state.store';

@Injectable({ providedIn: 'root' })
export class CreateNewGameStateQuery extends QueryEntity<CreateNewGameStateState> {

  constructor(protected store: CreateNewGameStateStore) {
    super(store);
  }

}
