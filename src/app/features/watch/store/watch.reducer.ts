import { createReducer, on } from '@ngrx/store';
import * as WatchActions from './watch.actions';

const WatchStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type WatchStatus = typeof WatchStatus[keyof typeof WatchStatus];

export interface WatchState {
  gameId: string;
  streamUrl: string;
  status: WatchStatus;
  error?: string;
}

export const initialState: WatchState = {
  gameId: '',
  streamUrl: '',
  status: WatchStatus.Idle,
};

export const watchReducer = createReducer(
  initialState,
  on(WatchActions.loadWatch, (state, { gameId }) => ({
    ...state,
    gameId,
    status: WatchStatus.Loading,
    error: undefined,
  })),
  on(WatchActions.loadWatchSuccess, (state, { gameId, streamUrl }) => ({
    ...state,
    gameId,
    streamUrl,
    status: WatchStatus.Idle,
    error: undefined,
  })),
  on(WatchActions.loadWatchFailure, (state, { error }) => ({
    ...state,
    status: WatchStatus.Error,
    error,
  }))
);
