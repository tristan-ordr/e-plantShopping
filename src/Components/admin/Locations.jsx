import React, {useEffect} from "react";

// Import everything needed to use the `useQuery` hook
import {ApolloClient, gql, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider, useQuery} from "@apollo/client/react";


const client = new ApolloClient({
    link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
    cache: new InMemoryCache(),
});

function DisplayLocations() {
    const GET_LOCATIONS = gql`
        query GetLocations {
            locations {
                id
                name
                description
                photo
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            <br />
            <b>About this location:</b>
            <p>{description}</p>
            <br />
        </div>
    ));
}

export default function Locations() {
    // In reality, we'd want the ApolloProvider to be much higher in the tree (wrapping <App/> or similar)
    //    but for this tutorial, I want everything in one place, and I want to provide a different client further up.
    return (
        <div className="px-10 py-10 w-[100%] h-full">
            <div className="bg-white px-10 py-5 rounded-xl  h-full ">
                <ApolloProvider client={client}>
                    <DisplayLocations/>
                </ApolloProvider>
            </div>
        </div>
    )
}
