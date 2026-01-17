import { createAction, props } from '@ngrx/store';
import { Player } from '../models/player.model';

export const loadPlayers = createAction('[Player] Load Players');
export const loadPlayersSuccess = createAction('[Player] Load Players Success', props<{ players: Player[] }>());
export const loadPlayersFailure = createAction('[Player] Load Players Failure', props<{ error: string }>());

export const loadPlayer = createAction('[Player] Load Player', props<{ id: string }>());
export const loadPlayerSuccess = createAction('[Player] Load Player Success', props<{ player: Player }>());

export const createPlayer = createAction('[Player] Create Player', props<{ player: Player }>());
export const createPlayerSuccess = createAction('[Player] Create Player Success', props<{ player: Player }>());

export const updatePlayer = createAction('[Player] Update Player', props<{ id: string; changes: Partial<Player> }>());
export const updatePlayerSuccess = createAction('[Player] Update Player Success', props<{ id: string; changes: Partial<Player> }>());

export const deletePlayer = createAction('[Player] Delete Player', props<{ id: string }>());
export const deletePlayerSuccess = createAction('[Player] Delete Player Success', props<{ id: string }>());
