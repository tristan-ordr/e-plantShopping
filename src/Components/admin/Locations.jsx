import React, {useEffect} from "react";

// Import everything needed to use the `useQuery` hook
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


export default function Locations() {
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

    return (
        <div className="px-10 py-10 w-[100%] h-full">
            <div className="bg-white px-10 py-5 rounded-xl  h-full ">
                <h1>Hi from locations</h1>
            </div>
        </div>
    )
}
