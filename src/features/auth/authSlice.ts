import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface AuthState {
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?: User
}

export interface LoginPayload {
    username: string,
    password: string
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>){
        state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>){
        state.logging = false;
        state.isLoggedIn = true;
        state.currentUser = action.payload
    },
    loginFailed(state, action: PayloadAction<string>){
        state.logging = false;

    },
    logout(state){
        state.isLoggedIn = false;
        state.currentUser = undefined
    },
  },
});
//action
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

//reducer
const authReducer = authSlice.reducer;
export default authReducer;

