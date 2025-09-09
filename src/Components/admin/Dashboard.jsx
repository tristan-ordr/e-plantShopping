import React from 'react';
import Login from "./Login.jsx";
import { NavLink, Outlet } from "react-router";
import { useAuth } from "../../context/auth.jsx"

// Import everything needed to use the `useQuery` hook
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";




export default function Dashboard() {
    const { authorization } = useAuth();
    const token = authorization.token;

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
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')] absolute top-[0] left-[0] w-[100%] h-[100%] brightness-80 bg-cover bg-repeat">
            </div>
            <div className="flex z-1 w-screen  backdrop-blur-xs bg-[rgba(0,0,0,0.5)] h-[100%]">
                <div className="flex w-screen">
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
                                        to="locations"
                                        className="text-white mx-10"
                                    >
                                        Apollo Client Tutorial
                                    </NavLink>
                                    <NavLink
                                        to="/e-plantShopping/admin"
                                        className="text-white mx-4 ml-auto mr-10"
                                    >
                                        Logout
                                    </NavLink>
                                </div>
                                <div className="flex flex-row h-full">
                                    <ApolloProvider client={client}>
                                        <Outlet />
                                    </ApolloProvider>
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}
