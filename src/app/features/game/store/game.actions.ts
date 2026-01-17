import { createAction, props } from '@ngrx/store';
import { Game } from '../models/game-models';

export const loadGames = createAction('[Game] Load Games');
export const loadGamesSuccess = createAction('[Game] Load Games Success', props<{ games: Game[] }>());
export const loadGamesFailure = createAction('[Game] Load Games Failure', props<{ error: string }>());

export const createGame = createAction('[Game] Create Game', props<{ game: Game }>());
export const createGameSuccess = createAction('[Game] Create Game Success', props<{ game: Game }>());

export const updateGame = createAction('[Game] Update Game', props<{ id: string; changes: Partial<Game> }>());
export const updateGameSuccess = createAction('[Game] Update Game Success', props<{ id: string; changes: Partial<Game> }>());

export const deleteGame = createAction('[Game] Delete Game', props<{ id: string }>());
export const deleteGameSuccess = createAction('[Game] Delete Game Success', props<{ id: string }>());

export const addGame = createAction('[Game] Add Game', props<{ game: Game }>());
export const editGame = createAction('[Game] Edit Game', props<{ id: string; game: Partial<Game> }>());
export const removeGame = createAction('[Game] Remove Game', props<{ id: string }>());
