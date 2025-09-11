import * as React from 'react';
import {useState} from "react";

import { AuthContext } from "../../context/auth.jsx"

import Dashboard from "./Dashboard.js";
import { setJwtToken, setRefreshToken, getJwtToken, getRefreshToken } from "./jwt.js";


export default function authorizationAdmin() {
    const [authState, setAuthState] = useState({
        token: getJwtToken(),
        refresh: getRefreshToken()
    })

    const initialValue = {
        authorization: authState,
        setAuthorization: (authorization) => {
            setJwtToken(authorization.token)
            setRefreshToken(authorization.refresh)
            setAuthState(authorization)
        }
    }

    return (
        <AuthContext.Provider value={initialValue}>
            <Dashboard/>
        </AuthContext.Provider>
    )
}