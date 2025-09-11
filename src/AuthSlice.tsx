import { createSlice } from '@reduxjs/toolkit';
import {AuthStateInterface} from "./types/State";
import * as _jwt from "./Components/admin/jwt";

const initialState: AuthStateInterface = {
    token: _jwt.getJwtToken(),
    refresh: _jwt.getRefreshToken()
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addTokens: (state, action) => {
            const { token, refresh } = action.payload;

            _jwt.setJwtToken(token);
            _jwt.setRefreshToken(refresh);

            state.token = token;
            state.refresh = refresh;
        },
        removeTokens: (state, action) => {
            _jwt.removeJwtToken();
            _jwt.removeRefreshToken();

            state.token = null;
            state.refresh = null;
        },
        refresh: (state, action) => {
            const { newToken } = action.payload;

            _jwt.setJwtToken(newToken);

            state.token = newToken
        }
    }
});

export const { addTokens, removeTokens, refresh } = AuthSlice.actions;

export default AuthSlice.reducer;