import * as React  from 'react';
import LogoutButton from "./LogoutButton";
import PlantList from "./PlantList";


export type DashboardModalType = "new_category" | "remove_categories" | "edit_plant" | null;
export interface DashboardModalState {
    modalType: DashboardModalType,
    modalData: {
        plantId: string | null
    }
}

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