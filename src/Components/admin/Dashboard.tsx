import * as React  from 'react';
import PlantList from "./PlantList";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { removeTokens } from '../../AuthSlice';
import {StateHolderInterface} from "../../types/State";


export default function Dashboard() {
    const auth = useSelector( (state: StateHolderInterface )=> state.auth)

    const dispatch = useDispatch();

    const logout = () => {
        axios.delete('http://localhost:4000/logout', {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
        data: {
            token: auth.refresh
        }}).then(res => {
            if (res.status === 204) {
                dispatch(removeTokens({}));
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="flex-1">
            <div className="flex flex-col space-y-1">
                <div className="flex flex-col flex-grow">
                    <button
                        onClick={() => logout()}
                        name="Logout"
                        className={`group/button flex items-center justify-center border -scale-x-100 transform transition-transform duration-50 active:-scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-transparent text-foreground hover:bg-gray-100 hover:border-gray-100 disabled:bg-transparent disabled:border-transparent focus-visible:ring-gray-600 focus-visible:bg-gray-100 h-[34px] py-1.5 rounded-md text-sm leading-5 space-x-2 w-[34px] px-0 flex-shrink-0`}>
                        <LogoutIcon/>
                    </button>
                    <PlantList/>
                </div>
            </div>
        </div>
    )
}