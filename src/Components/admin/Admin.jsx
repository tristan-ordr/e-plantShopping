import React, {useState} from 'react';

import { AuthContext } from "../../context/auth.jsx"

import Dashboard from "./Dashboard.jsx";
import { setJwtToken, setRefreshToken, getJwtToken, getRefreshToken } from "./jwt.jsx";


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