import LogoutButton from "./LogoutButton";
import { Outlet } from 'react-router';


export default function Dashboard() {
    return (
        <div className="flex-1">
            <div className="flex flex-col space-y-1">
                <div className="flex flex-col flex-grow">
                    <LogoutButton />
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}