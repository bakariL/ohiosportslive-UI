import { createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';

const SearchStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type SearchStatus = typeof SearchStatus[keyof typeof SearchStatus];

export interface SearchState {
  query: string;
  results: SearchActions.SearchResult[];
  status: SearchStatus;
  error?: string;
}

export const initialState: SearchState = {
  query: '',
  results: [],
  status: SearchStatus.Idle,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.search, (state, { query }) => ({
    ...state,
    query,
    status: SearchStatus.Loading,
    error: undefined,
  })),
  on(SearchActions.searchSuccess, (state, { results }) => ({
    ...state,
    results,
    status: SearchStatus.Idle,
  })),
  on(SearchActions.searchFailure, (state, { error }) => ({
    ...state,
    status: SearchStatus.Error,
    error,
  })),
  on(SearchActions.clearSearch, () => ({ ...initialState }))
);
