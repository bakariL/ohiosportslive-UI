import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CreateNewGameState } from './create-new-game-state.model';

@Injectable({ providedIn: 'root' })
export class CreateNewGameStateService {

  constructor( private http: HttpClient) {
  }


  get() {
    return this.http.get<CreateNewGameState[]>('https://api.com').pipe(tap(entities => {
      console.log()
    }));
  }

  add(createNewGameState: CreateNewGameState) {
    console.log();
  }

  // update(id: string, createNewGameState: Partial<CreateNewGameState>) {
  //   this.createNewGameStateStore.update(id, createNewGameState);
  // }

  // remove(id: ID) {
  //   this.createNewGameStateStore.remove(id);
  // }

}
