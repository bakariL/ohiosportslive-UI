import { createReducer, on } from '@ngrx/store';
import * as GameActions from './game.actions';
import { Game } from '../models/game-models';

export interface GameState {
  games: Game[];
}

export const initialState: GameState = {
  games: []
};

export const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGamesSuccess, (state, { games }) => ({ ...state, games })),
  on(GameActions.addGame, (state, { game }) => ({ ...state, games: [...state.games, game] })),
  on(GameActions.editGame, (state, { id, game }) => ({
    ...state,
    games: state.games.map(g => g.gameId === id ? { ...g, ...game } : g)
  })),
  on(GameActions.removeGame, (state, { id }) => ({
    ...state,
    games: state.games.filter(g => g.gameId !== id)
  }))
);
