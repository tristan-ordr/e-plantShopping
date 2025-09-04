import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider} from "react-router";
import shoppingRouter from "./router.js";

import {AuthContext} from "./context/auth.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={shoppingRouter}/>

    </React.StrictMode>,
)
