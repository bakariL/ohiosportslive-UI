import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LiveStreamingState } from './live-streaming.reducer';

export const selectLiveStreamingState =
  createFeatureSelector<LiveStreamingState>('liveStreaming');

export const selectLiveStreamingSport = createSelector(
  selectLiveStreamingState,
  (state: LiveStreamingState) => state.sport
);

export const selectLiveGames = createSelector(
  selectLiveStreamingState,
  (state: LiveStreamingState) => state.liveGames
);

export const selectPreviousGames = createSelector(
  selectLiveStreamingState,
  (state: LiveStreamingState) => state.previousGames
);

export const selectLiveStreamingStatus = createSelector(
  selectLiveStreamingState,
  (state: LiveStreamingState) => state.status
);
