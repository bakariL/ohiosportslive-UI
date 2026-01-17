import { createAction, props } from '@ngrx/store';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: AuthUser; token: string }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const register = createAction('[Auth] Register', props<{ payload: Record<string, unknown> }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ user: AuthUser }>());
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: string }>());
