import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const selectPlayerState = createFeatureSelector<PlayerState>('player');

export const selectPlayers = createSelector(selectPlayerState, (state) => state.players);
export const selectSelectedPlayer = createSelector(selectPlayerState, (state) => state.selected);
export const selectPlayerStatus = createSelector(selectPlayerState, (state) => state.status);
export const selectPlayerError = createSelector(selectPlayerState, (state) => state.error);
