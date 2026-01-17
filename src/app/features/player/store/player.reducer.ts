import { createReducer, on } from '@ngrx/store';
import { Player } from '../models/player.model';
import * as PlayerActions from './player.actions';

const PlayerStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type PlayerStatus = typeof PlayerStatus[keyof typeof PlayerStatus];

export interface PlayerState {
  players: Player[];
  selected?: Player;
  status: PlayerStatus;
  error?: string;
}

export const initialState: PlayerState = {
  players: [],
  status: PlayerStatus.Idle,
};

export const playerReducer = createReducer(
  initialState,
  on(PlayerActions.loadPlayers, (state) => ({ ...state, status: PlayerStatus.Loading, error: undefined })),
  on(PlayerActions.loadPlayersSuccess, (state, { players }) => ({ ...state, players, status: PlayerStatus.Idle })),
  on(PlayerActions.loadPlayersFailure, (state, { error }) => ({ ...state, status: PlayerStatus.Error, error })),
  on(PlayerActions.loadPlayerSuccess, (state, { player }) => ({ ...state, selected: player })),
  on(PlayerActions.createPlayerSuccess, (state, { player }) => ({
    ...state,
    players: [...state.players, player],
  })),
  on(PlayerActions.updatePlayerSuccess, (state, { id, changes }) => ({
    ...state,
    players: state.players.map((item) => (item.id === id ? { ...item, ...changes } : item)),
    selected: state.selected?.id === id ? { ...state.selected, ...changes } : state.selected,
  })),
  on(PlayerActions.deletePlayerSuccess, (state, { id }) => ({
    ...state,
    players: state.players.filter((item) => item.id !== id),
    selected: state.selected?.id === id ? undefined : state.selected,
  }))
);
