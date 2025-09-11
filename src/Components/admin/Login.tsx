import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {addTokens} from "../../AuthSlice";


export default function Login() {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        'username': '',
        'password': ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser(prevState=> ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        axios.post('http://localhost:4000/login', {
            username: user.username,
            password: user.password
        }).then ( res => {
            if (res.status === 200) {
                dispatch(addTokens({
                    'token': res.data['accessToken'],
                    'refresh': res.data['refreshToken']
                }));
            }
        }).catch (err => {
            console.log(err);
        })
    }

    return (
    <form className="flex flex-col">
        <section className="bg-white rounded-lg mt-4 flex flex-col px-20 py-8">
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
                    value={user.username}
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
        </section>
        <button
            onClick={handleSubmit}
            className="mt-10 px-[25px] py-[15px] rounded-md bg-[#4caf50] text-white cursor-pointer text-2xl hover:bg-[#45a049]">
            Login
        </button>
    </form>
    )
}
