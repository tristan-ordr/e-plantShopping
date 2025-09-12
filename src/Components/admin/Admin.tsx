import { Outlet } from "react-router";

import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";
import {useSelector} from "react-redux";

import Login from "./Login.js";
import {StateHolderInterface} from "../../types/State";


export default function Admin() {
    const auth = useSelector( (state: StateHolderInterface )=> state.auth)
    const token = auth.token;
    const client = new ApolloClient({
        link: new HttpLink({
            uri: "http://localhost:3000/api/graphql",
            headers: {
                Authorization: `Bearer ${token}`,
                "apollo-require-preflight": "true",
            },

        }),
        cache: new InMemoryCache(),
    });

    return(
        <div className="relative w-screen h-screen">
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] absolute top-[0] left-[0] w-[100%] h-[100%] brightness-80 bg-cover bg-repeat"/>
            <div className="flex z-1 w-screen  backdrop-blur-xs bg-[rgba(0,0,0,0.5)] h-[100%]">
                <div className="flex w-screen">
                    <div className="px-10 py-10 w-[100%] ">
                        <div className="bg-white px-10 py-5 rounded-xl">
                    {
                        token ?
                            <div className="flex flex-row h-full">
                                <ApolloProvider client={client}>
                                    <Outlet />
                                </ApolloProvider>
                            </div>
                        :
                            <div className="flex items-center justify-evenly">
                                <Login/>
                            </div>
                    }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
