import React from 'react';
import {Link} from "react-router";

export default function Admin() {
    return (
            <div className="relative w-screen h-screen">
                <div className="bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] absolute top-[0] left-[0] w-[100%] h-[100%] brightness-80 bg-cover"></div>
                <div className="content flex z-1 h-screen w-screen items-center backdrop-blur-xs bg-[rgba(0,0,0,0.5)] justify-evenly">
                    <Link
                        to="/e-plantShopping/admin/inventory"
                        className="mt-[40px] px-[25px] py-[15px] rounded-md bg-[#4caf50] text-white cursor-pointer text-2xl hover:bg-[#45a049]">
                        Inventory Management
                    </Link>
                    <Link
                        to="/e-plantShopping/admin/transactions"
                        className="mt-[40px] px-[25px] py-[15px] rounded-md bg-[#4caf50] text-white cursor-pointer text-2xl hover:bg-[#45a049]">
                        Transaction Management
                    </Link>
                    <Link
                        to="/e-plantShopping/admin"
                        className="mt-[40px] px-[25px] py-[15px] rounded-md bg-[#4caf50] text-white cursor-pointer text-2xl hover:bg-[#45a049]">
                        Logout
                    </Link>
                </div>
            </div>
    )
}