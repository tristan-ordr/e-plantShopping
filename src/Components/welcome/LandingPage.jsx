import React from "react";
import AboutUs from "./AboutUs.jsx";
import {Link} from "react-router";

const LandingContent = () => {
    return (
        <>
            <h1 className="text-white text-5xl font-bold">Welcome To Paradise Nursery</h1>
            <div className="w-[50px] h-[2px] bg-[#4caf50] my-[20px]"></div>
            <p className="text-white text-2xl">Where Green Meets Serenity</p>

            <Link
                className="mt-[40px] px-[25px] py-[15px] rounded-md bg-[#4caf50] text-white cursor-pointer text-2xl hover:bg-[#45a049]"
                to="shopping"
            >
                Get Started
            </Link>
        </>
    )
}
export default function() {
    return (
        <div className="relative w-screen h-screen">
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] absolute top-[0] left-[0] w-[100%] h-[100%] brightness-80 bg-cover"></div>
            <div className="flex flex-col z-1 h-screen w-screen backdrop-blur-xs bg-[rgba(0,0,0,0.5)]">
                <div className="bg-[#4caf50] w-[100%] flex flex-row-reverse">
                    <Link
                        className="text-white mr-6 my-2"
                        to="/e-plantShopping/admin"
                    >
                        Login
                    </Link>
                </div>
                <div className="flex z-1 items-center justify-between h-[100%]">
                    <div className="basis-1/3 text-center items-center ml-2 flex flex-col max-w-[350px]">
                        <LandingContent />
                    </div>
                    <div className="basis-2/3">
                        <AboutUs/>
                    </div>
                </div>
            </div>
        </div>
    )
}