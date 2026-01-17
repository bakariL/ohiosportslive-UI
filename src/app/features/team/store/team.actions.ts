import { createAction, props } from '@ngrx/store';
import { Team } from '../models/Team';

export const loadTeams = createAction('[Team] Load Teams');
export const loadTeamsSuccess = createAction('[Team] Load Teams Success', props<{ teams: Team[] }>());
export const loadTeamsFailure = createAction('[Team] Load Teams Failure', props<{ error: string }>());

export const loadTeam = createAction('[Team] Load Team', props<{ id: number }>());
export const loadTeamSuccess = createAction('[Team] Load Team Success', props<{ team: Team }>());

export const createTeam = createAction('[Team] Create Team', props<{ team: Team }>());
export const createTeamSuccess = createAction('[Team] Create Team Success', props<{ team: Team }>());

export const updateTeam = createAction('[Team] Update Team', props<{ id: number; changes: Partial<Team> }>());
export const updateTeamSuccess = createAction('[Team] Update Team Success', props<{ id: number; changes: Partial<Team> }>());

export const deleteTeam = createAction('[Team] Delete Team', props<{ id: number }>());
export const deleteTeamSuccess = createAction('[Team] Delete Team Success', props<{ id: number }>());
