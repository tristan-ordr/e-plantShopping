import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router";

import { Amplify } from "aws-amplify";

// @ts-ignore
import outputs from "../amplify_outputs.json";

import router from "./router";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
