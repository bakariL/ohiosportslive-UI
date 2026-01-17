import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

const AuthStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
} as const;

type AuthStatus = typeof AuthStatus[keyof typeof AuthStatus];

export interface AuthState {
  user?: AuthActions.AuthUser;
  token?: string;
  status: AuthStatus;
  error?: string;
}

export const initialState: AuthState = {
  status: AuthStatus.Idle,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, status: AuthStatus.Loading, error: undefined })),
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    status: AuthStatus.Idle,
    error: undefined,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, status: AuthStatus.Error, error })),
  on(AuthActions.register, (state) => ({ ...state, status: AuthStatus.Loading, error: undefined })),
  on(AuthActions.registerSuccess, (state, { user }) => ({ ...state, user, status: AuthStatus.Idle })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, status: AuthStatus.Error, error })),
  on(AuthActions.logout, () => ({ status: AuthStatus.Idle }))
);
