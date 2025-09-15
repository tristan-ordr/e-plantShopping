import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import shoppingRouter from "./router";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={shoppingRouter}/>
    </React.StrictMode>,
)
