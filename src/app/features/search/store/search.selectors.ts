import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchQuery = createSelector(selectSearchState, (state) => state.query);
export const selectSearchResults = createSelector(selectSearchState, (state) => state.results);
export const selectSearchStatus = createSelector(selectSearchState, (state) => state.status);
export const selectSearchError = createSelector(selectSearchState, (state) => state.error);
