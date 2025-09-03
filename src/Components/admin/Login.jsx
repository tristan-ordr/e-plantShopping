import React, {useState} from 'react';
import {Link} from "react-router";


export default function Login() {

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser(prevState=> ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <main className="relative w-screen h-screen">
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] absolute top-[0] left-[0] w-[100%] h-[100%] brightness-80 bg-cover"></div>
            <div className="flex flex-col z-1 h-screen w-screen items-center backdrop-blur-xs bg-[rgba(0,0,0,0.5)] justify-center">
                <section className="bg-white rounded-lg mt-4 flex flex-col px-20 py-8">
                    <form className="flex flex-col">
                        <div className="flex flex-col mt-6">
                            <label
                                htmlFor="username-input"
                                className="text-mg-gray-600 text-[14px]/[16px]"
                            >
                                Username
                            </label>
                            <input
                                id="username-input"
                                className="form-input mt-[3px] px-[10px] py-[7px] shadow-xs border border-mg-gray-100 rounded-md placeholder:text-mg-gray-300 placeholder:text-[14px]"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col mt-6 mb-6">
                            <label
                                htmlFor="password-input"
                                className="text-mg-gray-600 text-[14px]/[16px]"
                            >
                                Password
                            </label>
                            <input
                                id="password-input"
                                className="form-input mt-[3px] px-[10px] py-[7px] shadow-xs border border-mg-gray-100 rounded-md placeholder:text-mg-gray-300 placeholder:text-[14px]"
                                type="text"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </section>
                <Link
                    to="/e-plantShopping/admin/home"
                    className="mt-10 px-[25px] py-[15px] rounded-md bg-[#4caf50] text-white cursor-pointer text-2xl hover:bg-[#45a049]">
                    Login
                </Link>
            </div>
        </main>
    )
}
