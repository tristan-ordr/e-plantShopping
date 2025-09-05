import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import shoppingRouter from "./router.js";

const client = new ApolloClient({
    link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={shoppingRouter}/>
        </ApolloProvider>
    </React.StrictMode>,
)
