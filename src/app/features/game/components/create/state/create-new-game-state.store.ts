import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CreateNewGameState } from './create-new-game-state.model';

export interface CreateNewGameStateState extends EntityState<CreateNewGameState> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'create-new-game-state' })
export class CreateNewGameStateStore extends EntityStore<CreateNewGameStateState> {

  constructor() {
    super({});
  }

}
