import * as React  from 'react';
import PlantList from "./PlantList";


export default function Inventory() {
    return (
        <div className="px-10 py-10 w-[100%] ">
            <div className="bg-white px-10 py-5 rounded-xl">
                <PlantList/>
            </div>
        </div>
    )
}