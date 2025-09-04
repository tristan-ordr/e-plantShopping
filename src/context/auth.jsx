import React, { createContext, useContext } from "react";

export const AuthContext = createContext({
    authorization: {
        token: "",
        refresh: ""
    },
    setAuthorization: (authorization) => {}
});

export function useAuth() {
    return useContext(AuthContext);
}