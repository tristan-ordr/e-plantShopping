import React from 'react';
import { Link } from "react-router";
import {gql} from "@apollo/client";
import {useQuery} from "@apollo/client/react";


export default function PlantList() {
    const GET_PLANTS = gql`
        query GetPlants {
            plants {
                id
                name
                cost
                description
                image
                category {
                    name
                }
            }
            categories {
                id
                name
            }
        }
        `;

    const { loading, error, data } = useQuery(GET_PLANTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <>
            <div className="flex flex-row-reverse">
                <Link
                    className="mx-6 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]"
                    to="new_plant"
                >
                    New Plant
                </Link>
                <Link
                    className="mx-6 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]"
                    to="new_category"
                >
                    New Category
                </Link>
            </div>
            <table className="w-[100%] border mt-2 mb-10">
                <thead>
                <tr className="border bg-gray-300">
                    <th scope="col" className="px-2 text-left">Category</th>
                    <th scope="col" className="px-2 text-left">Plant Name</th>
                    <th scope="col" className="px-2 text-left">Cost</th>
                    <th scope="col" className="px-2 text-left"></th>
                </tr>
                </thead>
                <tbody>
                { data.plants.map((plant, index) => (
                    <tr key={index} className="odd:bg-gray-100 even:bg-gray-200 ">
                        <td className="px-2">
                            {plant.category.name}
                        </td>
                        <td className="px-2">
                            {plant.name}
                        </td>
                        <td className="px-2">
                            {plant.cost}
                        </td>
                        <td>
                            <button className="mx-6 px-3 rounded-lg cursor-pointer hover:bg-red-800 hover:text-white">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}