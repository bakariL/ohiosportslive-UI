import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

export const selectGameState = createFeatureSelector<GameState>('game');

export const selectGames = createSelector(
  selectGameState,
  (state: GameState) => state.games
);
