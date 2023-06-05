import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { CreateNewGameState } from './create-new-game-state.model';
import { CreateNewGameStateStore } from './create-new-game-state.store';

@Injectable({ providedIn: 'root' })
export class CreateNewGameStateService {

  constructor(private createNewGameStateStore: CreateNewGameStateStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<CreateNewGameState[]>('https://api.com').pipe(tap(entities => {
      this.createNewGameStateStore.set(entities);
    }));
  }

  add(createNewGameState: CreateNewGameState) {
    this.createNewGameStateStore.add(createNewGameState);
  }

  update(id: string, createNewGameState: Partial<CreateNewGameState>) {
    this.createNewGameStateStore.update(id, createNewGameState);
  }

  remove(id: ID) {
    this.createNewGameStateStore.remove(id);
  }

}
