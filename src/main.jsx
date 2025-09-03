import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./Components/Root.jsx";
import ProductList from "./Components/ProductList.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import CartItem from "./Components/CartItem.jsx";
import Shopping from "./Components/Shopping.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: LandingPage },
            {
                path: 'shopping',
                Component: Shopping,
                children: [
                    { index: true, Component: ProductList },
                    { path: 'cart', Component: CartItem }
                ]
            },
        ]
    },
    {
        path: '/e-plantShopping',
        Component: Root,
        children: [
            { index: true, Component: LandingPage },
            {
                path: 'shopping',
                Component: Shopping,
                children: [
                    { index: true, Component: ProductList },
                    { path: 'cart', Component: CartItem }
                ]
            },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
