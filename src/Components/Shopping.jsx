import {Outlet} from "react-router";
import React from "react";
import NavBar from "./NavBar.jsx";

const Shopping = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Shopping;