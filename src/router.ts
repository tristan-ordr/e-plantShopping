import {createBrowserRouter} from "react-router";
import Root from "./Components/Root.js";
import LandingPage from "./Components/welcome/LandingPage.js";
import Shopping from "./Components/shopping/Shopping.js";
import Dashboard from "./Components/admin/Dashboard.js";
import ProductList from "./Components/shopping/ProductList";
import CartItem from "./Components/shopping/CartItem";
import Inventory from "./Components/admin/Inventory.jsx";
import Admin from "./Components/admin/Admin.tsx";

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
            {
                Component: Admin,
                children: [
                    {
                        path: 'admin',
                        Component: Dashboard,
                        children: [
                            { index: true, Component: Inventory },
                        ]
                    }
                ]
            }
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
            {
                Component: Admin,
                children: [
                    {
                        path: 'admin',
                        Component: Dashboard,
                        children: [
                            { index: true, Component: Inventory },
                        ]
                    }
                ]
            }
        ]
    },
]);

export default router;