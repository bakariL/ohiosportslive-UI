import { createAction, props } from "@ngrx/store";
import { Game } from "../models/game-models";

export const loadGames = createAction('[Game] Load Games');
export const loadGamesSuccess = createAction('[Game] Load Games Success', props<{ games: Game[] }>());
export const addGame = createAction('[Game] Add Game', props<{ game: Game }>());
export const editGame = createAction('[Game] Edit Game', props<{ id: string, game: Partial<Game> }>());
export const removeGame = createAction('[Game] Remove Game', props<{ id: string }>());
