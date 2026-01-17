import { createReducer, on } from '@ngrx/store';
import * as GameActions from './game.actions';
import { Game } from '../models/game-models';

const GameStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type GameStatus = typeof GameStatus[keyof typeof GameStatus];

export interface GameState {
  games: Game[];
  status: GameStatus;
  error?: string;
}

export const initialState: GameState = {
  games: [],
  status: GameStatus.Idle,
};

export const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGames, (state) => ({ ...state, status: GameStatus.Loading, error: undefined })),
  on(GameActions.loadGamesSuccess, (state, { games }) => ({ ...state, games, status: GameStatus.Idle })),
  on(GameActions.loadGamesFailure, (state, { error }) => ({ ...state, status: GameStatus.Error, error })),
  on(GameActions.addGame, (state, { game }) => ({ ...state, games: [...state.games, game] })),
  on(GameActions.editGame, (state, { id, game }) => ({
    ...state,
    games: state.games.map((item) => (item.gameId === id ? { ...item, ...game } : item)),
  })),
  on(GameActions.removeGame, (state, { id }) => ({
    ...state,
    games: state.games.filter((item) => item.gameId !== id),
  })),
  on(GameActions.createGameSuccess, (state, { game }) => ({
    ...state,
    games: [...state.games, game],
  })),
  on(GameActions.updateGameSuccess, (state, { id, changes }) => ({
    ...state,
    games: state.games.map((item) => (item.gameId === id ? { ...item, ...changes } : item)),
  })),
  on(GameActions.deleteGameSuccess, (state, { id }) => ({
    ...state,
    games: state.games.filter((item) => item.gameId !== id),
  }))
);
