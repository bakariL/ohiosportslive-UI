import { createStore, withProps } from '@ngneat/elf';

export interface ScoreProps {
    id: string;
    scoreInfo : { 
        team: string;
        incrementAmt: number;
    };
}

const store = createStore(
    {name: 'score'},
    withProps<ScoreProps>({id: '', scoreInfo: {team: '', incrementAmt: 0}})
    // withEntities<Score>(),
    // withCollectionIds()
  );

  export class ScoreStore {
    
  }
