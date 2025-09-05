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

const executeQuery = (client) => {
    client.query({
        query: gql`
            query GetLocations {
                locations {
                    id
                    name
                    description
                    photo
                }
            }
        `,
    }).then(queryResult => {
        console.log(queryResult)
    });
}

executeQuery(client);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={shoppingRouter}/>
    </React.StrictMode>,
)
