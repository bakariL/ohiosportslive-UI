import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { GameState, gameReducer } from 'src/app/features/game/store/game.reducer';
// Import other reducers if you have them

// Define the overall state interface of your application
export interface AppState {
  game: GameState;
  // Add other feature states if you have them
}

// Define the root reducer function
export const rootReducer: ActionReducerMap<AppState> = {
  game: gameReducer,
  // Add other reducers here
};

// Combine all reducers into a single root reducer
export const reducers = combineReducers(rootReducer);
