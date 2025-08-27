import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router";
import App from './Components/App.jsx'
import Root from "./Components/Root.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root
    },
    {
        path: '/e-plantShopping',
        Component: Root,
        children: [
            {index: true, Component: App},
            // {path: '/main', Component: }
        ]
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
