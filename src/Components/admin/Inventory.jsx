import React  from 'react';
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import PlantList from "./PlantList.tsx";


export default function Inventory() {
    const GET_CATEGORIES = gql`
        query GetPlants {
            categories {
                name
                id
            }

        }
    `;

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="px-10 py-10 w-[100%] ">
            <div className="bg-white px-10 py-5 rounded-xl">
                { data.categories &&
                    <PlantList
                        categories={data.categories}
                    />
                }
            </div>
        </div>
    )
}