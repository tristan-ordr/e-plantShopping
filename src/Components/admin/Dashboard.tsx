import * as React  from 'react';
import LogoutButton from "./LogoutButton";
import PlantList from "./PlantList";

export default function Dashboard() {
    return (
        <div className="flex-1">
            <div className="flex flex-col space-y-1">
                <div className="flex flex-col flex-grow">
                    <LogoutButton />
                    <PlantList/>
                </div>
            </div>
        </div>
    )
}