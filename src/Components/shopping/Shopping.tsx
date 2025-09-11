import * as React from "react";

import {Outlet} from "react-router";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";
import NavBar from "./NavBar";

const Shopping = () => {
    const client = new ApolloClient({
        link: new HttpLink({
            uri: "http://localhost:3000/api/graphql",
            headers: {
                "apollo-require-preflight": "true",
            },

        }),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <NavBar />
            <Outlet />
        </ApolloProvider>
    )
}

export default Shopping;