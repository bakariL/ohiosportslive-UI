import { createReducer, on } from '@ngrx/store';
import * as LiveStreamingActions from './live-streaming.actions';

const LiveStreamingStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type LiveStreamingStatus =
  typeof LiveStreamingStatus[keyof typeof LiveStreamingStatus];

export interface LiveStreamingState {
  sport: string;
  liveGames: LiveStreamingActions.LiveStreamGame[];
  previousGames: LiveStreamingActions.LiveStreamGame[];
  status: LiveStreamingStatus;
  error?: string;
}

export const initialState: LiveStreamingState = {
  sport: 'Boys Basketball',
  liveGames: [],
  previousGames: [],
  status: LiveStreamingStatus.Idle,
};

export const liveStreamingReducer = createReducer(
  initialState,
  on(LiveStreamingActions.loadViewGames, (state, { sport }) => ({
    ...state,
    sport,
    status: LiveStreamingStatus.Loading,
    error: undefined,
  })),
  on(LiveStreamingActions.loadViewGamesSuccess, (state, { liveGames, previousGames }) => ({
    ...state,
    liveGames,
    previousGames,
    status: LiveStreamingStatus.Idle,
  })),
  on(LiveStreamingActions.loadViewGamesFailure, (state, { error }) => ({
    ...state,
    status: LiveStreamingStatus.Error,
    error,
  }))
);
