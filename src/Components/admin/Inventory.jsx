import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Outlet} from "react-router";



export default function Inventory() {
    const [plantsArray, setPlantsArray] = useState([]);

    useEffect( () => {
        axios
            .get("http://localhost:3000/plants")
            .then(res => setPlantsArray(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="px-10 py-10 w-[100%] ">
            <div className="bg-white px-10 py-5 rounded-xl">
                <Outlet/>
            </div>
        </div>
    )
}