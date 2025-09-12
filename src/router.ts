import {createBrowserRouter} from "react-router";
import Root from "./Components/Root.js";
import LandingPage from "./Components/welcome/LandingPage.js";
import Shopping from "./Components/shopping/Shopping.js";
import Dashboard from "./Components/admin/Dashboard.js";
import Locations from "./Components/tutorial/Locations.jsx";
import ProductList from "./Components/shopping/ProductList";
import CartItem from "./Components/shopping/CartItem";
import Admin from "./Components/admin/Admin";
import Inventory from "./Components/admin/Inventory.jsx";

const shoppingRouter = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: LandingPage },
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
                    },
                    { path: 'locations', Component: Locations },
                ]
            }
        ]
    },
]);

export default shoppingRouter;