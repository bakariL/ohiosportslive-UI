import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WatchState } from './watch.reducer';

export const selectWatchState = createFeatureSelector<WatchState>('watch');

export const selectWatchGameId = createSelector(selectWatchState, (state) => state.gameId);
export const selectWatchStreamUrl = createSelector(selectWatchState, (state) => state.streamUrl);
export const selectWatchStatus = createSelector(selectWatchState, (state) => state.status);
export const selectWatchError = createSelector(selectWatchState, (state) => state.error);
