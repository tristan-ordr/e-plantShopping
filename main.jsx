import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router";

import shoppingRouter from "./src/router.ts";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <h1>Hello, world!</h1>
            <RouterProvider router={shoppingRouter}/>
    </React.StrictMode>,
)
