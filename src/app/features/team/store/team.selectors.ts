import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeamState } from './team.reducer';

export const selectTeamState = createFeatureSelector<TeamState>('team');

export const selectTeams = createSelector(selectTeamState, (state) => state.teams);
export const selectSelectedTeam = createSelector(selectTeamState, (state) => state.selected);
export const selectTeamStatus = createSelector(selectTeamState, (state) => state.status);
export const selectTeamError = createSelector(selectTeamState, (state) => state.error);
