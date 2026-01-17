import { createAction, props } from '@ngrx/store';

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'player' | 'team' | 'event';
}

export const search = createAction('[Search] Search', props<{ query: string }>());
export const searchSuccess = createAction('[Search] Search Success', props<{ results: SearchResult[] }>());
export const searchFailure = createAction('[Search] Search Failure', props<{ error: string }>());
export const clearSearch = createAction('[Search] Clear Search');
