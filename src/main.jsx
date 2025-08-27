import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import {createBrowserRouter, RouterProvider} from "react-router";

const router = createBrowserRouter([
    {
        path: '/e-plantShopping',
        Component: App
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
