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
        <div className="px-10 py-10 w-[100%] h-[100%]">
            <div className="bg-white h-[100%] px-10 py-5 rounded-xl">
                <div className="flex flex-row-reverse">
                    <button className="mx-6 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">New Plant</button>
                    <button className="mx-6 py-2 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">New Category</button>
                </div>
                <div className="flex flex-col">
                    { plantsArray.map((category, index) => (
                        <div
                            key={index}>
                            <div className="flex flex-col">
                                {category.plants.map( (plant, plantIndex) => (
                                    <div
                                        key={plantIndex}
                                        className="flex flex-row justify-start">
                                        <p className="mx-6">
                                            {plant.name}
                                        </p>
                                        <p className="mx-6">
                                            {plant.cost}
                                        </p>
                                        <p className="mx-6">
                                            {category.category}
                                        </p>
                                        <button className="mx-6 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">Edit</button>
                                        <button className="mx-6 px-3 rounded-lg cursor-pointer hover:bg-[#4caf50]">Delete</button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

            </div>
        </div>
    </div>
    )
}