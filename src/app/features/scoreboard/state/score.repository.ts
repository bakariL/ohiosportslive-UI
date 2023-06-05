import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { createStore, withProps, select, propsArrayFactory } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  withEntities,
  selectEntities,
} from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { Scoreboard } from '../models/scoreboard.model';
import { ScoreStore } from './score-store';

// interface ScoreProps {
//     game: { id: string } | null;
//     team: {id: string } | null;
//     incrementAmt: {value: number } | null;
//   }
  

const {
    withCollectionIds,
    selectCollectionIds,
    addCollectionIds,
    removeCollectionIds,
    inCollectionIds,
  } = propsArrayFactory('collectionIds', { initialValue: [] as string[] });


  


@Injectable({ providedIn: 'root' })
export class ScoreRepository {

    /**
     *
     */
    constructor(private scoreStore: ScoreStore) {
        
    }
    score$ = scoreStore.pipe(select((state) => scoreStore.scoreInfo));

    updateScore(game: ScoreProps['id']): void {
        scoreStore.update((state) => ({
            ...state,
            game,
        }))
    }

    // addScore(teamId: string){
    //     if(!store.query(inCollectionIds(teamId))){(
    //         store.update(addCollectionIds(teamId)));
    //     }
    // }
}


