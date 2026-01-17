import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { authReducer, AuthState } from 'src/app/shared/auth/store/auth.reducer';
import { GameState, gameReducer } from 'src/app/features/game/store/game.reducer';
import { playerReducer, PlayerState } from 'src/app/features/player/store/player.reducer';
import { searchReducer, SearchState } from 'src/app/features/search/store/search.reducer';
import { teamReducer, TeamState } from 'src/app/features/team/store/team.reducer';
import { watchReducer, WatchState } from 'src/app/features/watch/store/watch.reducer';
// Import other reducers if you have them

// Define the overall state interface of your application
export interface AppState {
  auth: AuthState;
  game: GameState;
  player: PlayerState;
  search: SearchState;
  team: TeamState;
  watch: WatchState;
}

// Define the root reducer function
export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  game: gameReducer,
  player: playerReducer,
  search: searchReducer,
  team: teamReducer,
  watch: watchReducer,
};

// Combine all reducers into a single root reducer
export const reducers = combineReducers(rootReducer);
