import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    refreshToken: ''
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addTokens: (state, action) => {
            const { token, refreshToken } = action.payload;

            state.token = token;
            state.refreshToken = refreshToken;
        },
        removeTokens: (state, action) => {
            state.token = null;
            state.refreshToken = null;
        },
        refresh: (state, action) => {
            const { newToken } = action.payload;
            state.token = newToken
        }
    }
});

export const { addTokens, removeTokens, refresh } = AuthSlice.actions;

export default AuthSlice.reducer;