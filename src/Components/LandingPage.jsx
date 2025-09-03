import React from "react";
import AboutUs from "./AboutUs.jsx";
import {Link} from "react-router";


export default function() {
    return (
        <>
            <div className="background-image"></div>
            <div className="content">
                <div className="landing_content">
                    <h1>Welcome To Paradise Nursery</h1>
                    <div className="divider"></div>
                    <p>Where Green Meets Serenity</p>

                    <Link
                        className="get-started-button"
                        to="shopping"
                    >
                        Get Started
                    </Link>
                </div>
                <AboutUs/>
            </div>
            </>
    )
}