import React, {useEffect, useState} from 'react';
import axios from "axios";



export default function Inventory() {
    const [plantsArray, setPlantsArray] = useState([]);

    useEffect( () => {
        axios
            .get("http://localhost:3000/plants")
            .then(res => setPlantsArray(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="px-10 py-10 w-[100%] bg-black">
            <div className="bg-white px-10 py-5 rounded-xl">
                <div className="flex flex-row-reverse">
                    <button className="mx-6 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">New Plant</button>
                    <button className="mx-6 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">New Category</button>
                </div>
                <table className="w-[100%] border mt-2 mb-10">
                    <thead>
                    <tr className="border">
                        <th scope="col" className="border">Category</th>
                        <th scope="col" className="border">Plant Name</th>
                        <th scope="col" className="border">Cost</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { plantsArray.map((category, index) => (
                        <>
                            { category.plants.map((plant, plantIndex) => (
                            <tr className="border">
                                <td className="border px-2">{category.category}</td>
                                <td className="border px-2">{plant.name}</td>
                                <td className="border px-2">{plant.cost}</td>
                                <td>
                                    <button className="mx-6 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">Edit</button>
                                    <button className="mx-6 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">Delete</button>
                                </td>
                            </tr>
                            ))}
                        </>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}