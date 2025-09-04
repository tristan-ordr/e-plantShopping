import React from 'react';
import Login from "./Login.jsx";
import { NavLink, Outlet } from "react-router";
import { useAuth } from "../../context/auth.jsx"


export default function Dashboard() {
    const { authorization } = useAuth();
    const token = authorization.token;

    return(
        <div className="relative w-screen h-screen">
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] absolute top-[0] left-[0] w-[100%] h-[100%] brightness-80 bg-cover"></div>
            <div className="flex z-1 h-screen w-screen  backdrop-blur-xs bg-[rgba(0,0,0,0.5)]">
                { !token &&
                    <div className="flex items-center justify-evenly">
                        <Login/>
                    </div>
                }
                { token && (<>
                    <div className="flex flex-col w-screen">
                        <div className="flex flex-row align-center justify-left items-center bg-[#4caf50] py-5 w-[100%]">
                            <NavLink
                                to="inventory"
                                className="text-white mx-10"
                            >
                                Inventory Management
                            </NavLink>
                            <NavLink
                                to="transactions"
                                className="text-white mx-10"
                            >
                                Transaction Management
                            </NavLink>
                            <NavLink
                                to="/e-plantShopping/admin"
                                className="text-white mx-4 ml-auto mr-10"
                            >
                                Logout
                            </NavLink>
                        </div>
                        <div className="flex flex-row h-[100%]">
                            <Outlet />
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}
