import React, {useState} from 'react';

import { AuthContext } from "../../context/auth.jsx"

import Dashboard from "./Dashboard.jsx";


export default function authorizationAdmin() {
    const [authState, setAuthState] = useState({
        token: "",
        refresh: ""
    })

    const initialValue = {
        authorization: authState,
        setAuthorization: (authorization) => {
            setAuthState(authorization)
        }
    }

    return (
        <AuthContext.Provider value={initialValue}>
            <Dashboard/>
        </AuthContext.Provider>
    )
}