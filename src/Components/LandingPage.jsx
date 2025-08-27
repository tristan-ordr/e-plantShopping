import React from "react";
import AboutUs from "./AboutUs.jsx";

export default function({handleGetStartedClick}) {
    return (
        <>
            <div className="background-image"></div>
            <div className="content">
                <div className="landing_content">
                    <h1>Welcome To Paradise Nursery</h1>
                    <div className="divider"></div>
                    <p>Where Green Meets Serenity</p>

                    <button className="get-started-button" onClick={handleGetStartedClick}>
                        Get Started
                    </button>
                </div>
                <AboutUs/>
            </div>
            </>
    )
}