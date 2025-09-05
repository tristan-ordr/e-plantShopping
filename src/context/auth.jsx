import React, { createContext, useContext } from "react";

// Using context here is a little bit redundant since we're using sessionStorage for storing the tokens anyway...
//   we could technically just access the tokens from that session storage directly when we need them...
//   However, I just want the practice with createContext.
// The purpose of this project is to have one place to try out the tech stack I've been given.

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