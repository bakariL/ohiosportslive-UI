import { createReducer, on } from '@ngrx/store';
import { Team } from '../models/Team';
import * as TeamActions from './team.actions';

const TeamStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type TeamStatus = typeof TeamStatus[keyof typeof TeamStatus];

export interface TeamState {
  teams: Team[];
  selected?: Team;
  status: TeamStatus;
  error?: string;
}

export const initialState: TeamState = {
  teams: [],
  status: TeamStatus.Idle,
};

export const teamReducer = createReducer(
  initialState,
  on(TeamActions.loadTeams, (state) => ({ ...state, status: TeamStatus.Loading, error: undefined })),
  on(TeamActions.loadTeamsSuccess, (state, { teams }) => ({ ...state, teams, status: TeamStatus.Idle })),
  on(TeamActions.loadTeamsFailure, (state, { error }) => ({ ...state, status: TeamStatus.Error, error })),
  on(TeamActions.loadTeamSuccess, (state, { team }) => ({ ...state, selected: team })),
  on(TeamActions.createTeamSuccess, (state, { team }) => ({
    ...state,
    teams: [...state.teams, team],
  })),
  on(TeamActions.updateTeamSuccess, (state, { id, changes }) => ({
    ...state,
    teams: state.teams.map((item) => (item.id === id ? { ...item, ...changes } : item)),
    selected: state.selected?.id === id ? { ...state.selected, ...changes } : state.selected,
  })),
  on(TeamActions.deleteTeamSuccess, (state, { id }) => ({
    ...state,
    teams: state.teams.filter((item) => item.id !== id),
    selected: state.selected?.id === id ? undefined : state.selected,
  }))
);
