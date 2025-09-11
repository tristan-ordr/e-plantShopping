import * as React  from 'react';
import LogoutButton from "./LogoutButton";
import Inventory from "./Inventory";


export default function Dashboard() {
    return (
        <div className="flex-1">
            <div className="flex flex-col space-y-1">
                <div className="flex flex-col flex-grow">
                    <LogoutButton />
                    <Inventory/>
                </div>
            </div>
        </div>
    )
}