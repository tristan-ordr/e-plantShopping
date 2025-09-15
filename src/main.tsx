import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router";

import { Amplify } from "aws-amplify";

import outputs from "../amplify_outputs.json";
import type { Schema } from '../amplify/data/resource.ts'
import { generateClient } from 'aws-amplify/data'

import router from "./router";

Amplify.configure(outputs);
export const amplifyClient = generateClient<Schema>()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
