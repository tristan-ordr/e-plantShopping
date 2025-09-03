import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
    link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
    cache: new InMemoryCache(),
});