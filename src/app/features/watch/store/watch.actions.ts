import { createAction, props } from '@ngrx/store';

export const loadWatch = createAction('[Watch] Load Watch', props<{ gameId: string }>());
export const loadWatchSuccess = createAction(
  '[Watch] Load Watch Success',
  props<{ gameId: string; streamUrl: string }>()
);
export const loadWatchFailure = createAction('[Watch] Load Watch Failure', props<{ error: string }>());
