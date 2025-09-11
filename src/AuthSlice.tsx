import { createSlice } from '@reduxjs/toolkit';
import {AuthStateInterface} from "./types/State";

const initialState: AuthStateInterface = {
    token: '',
    refresh: ''
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addTokens: (state, action) => {
            const { token, refresh } = action.payload;

            state.token = token;
            state.refresh = refresh;
        },
        removeTokens: (state, action) => {
            state.token = null;
            state.refresh = null;
        },
        refresh: (state, action) => {
            const { newToken } = action.payload;
            state.token = newToken
        }
    }
});

export const { addTokens, removeTokens, refresh } = AuthSlice.actions;

export default AuthSlice.reducer;