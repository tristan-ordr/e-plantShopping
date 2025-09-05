import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router";
import {gql} from "@apollo/client";



export default function PlantList() {
    const [plantsArray, setPlantsArray] = useState([]);
    const [categoriesArray, setCategoriesArray] = useState([]);

    useEffect( () => {
        axios
            .get("http://localhost:3000/plants")
            .then(res => {
                const categoryData = res.data.map (category => category.category);
                setCategoriesArray(categoryData);

                const plantData = res.data.flatMap( (category) => {
                    return category.plants.map (plant => {
                        return {
                            category: category.category,
                            ...plant
                        }
                    })
                });
                setPlantsArray(plantData);
            })
            .catch(err => console.log(err))
    }, [])

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
                { plantsArray.map((plant, index) => (
                    <tr key={index} className="odd:bg-gray-100 even:bg-gray-200 ">
                        <td className="px-2">
                            <select name={`${plant.name}-categories}`} id={`${plant.name}-categories}`}>
                                { categoriesArray.map ((categoryName, index) => {
                                    return (
                                        <option key={index} value={categoryName} selected={categoryName === plant.category}>
                                            {categoryName}
                                        </option>
                                    )
                                })}
                            </select>
                        </td>
                        <td className="px-2">
                            <input
                                type="text"
                                id={`${plant.name}-name}`}
                                name="name"
                                value={plant.name}
                            />
                        </td>
                        <td className="px-2">
                            <input
                                type="text"
                                id={`${plant.name}-name}`}
                                name="name"
                                value={plant.cost}
                            />
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