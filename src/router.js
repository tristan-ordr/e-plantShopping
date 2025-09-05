import {createBrowserRouter, redirect} from "react-router";
import Root from "./Components/Root.jsx";
import LandingPage from "./Components/welcome/LandingPage.jsx";
import Shopping from "./Components/shopping/Shopping.jsx";
import ProductList from "./Components/shopping/ProductList.jsx";
import CartItem from "./Components/shopping/CartItem.jsx";
import Admin from "./Components/admin/Admin.jsx";
import Login from "./Components/admin/Login.jsx";
import Transactions from "./Components/admin/Transactions.jsx";
import Inventory from "./Components/admin/Inventory.jsx";
import axios from "axios";
import Dashboard from "./Components/admin/Dashboard.jsx";
import Preferences from "./Components/admin/Preferences.jsx";
import NewPlant from "./Components/admin/NewPlant.jsx";
import Category from "./Components/admin/Category.jsx";
import PlantList from "./Components/admin/PlantList.jsx";
import Locations from "./Components/admin/Locations.jsx";

const shoppingRouter = createBrowserRouter([
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
            {
                path: 'admin',
                Component: Admin,
                children: [
                    {
                        path: 'inventory',
                        Component: Inventory,
                        children: [
                            { index: true, Component: PlantList },
                            { path: 'new_plant', Component: NewPlant},
                            { path: 'new_category', Component: Category},
                        ]
                    },
                    { path: 'transactions', Component: Transactions},
                    { path: 'locations', Component: Locations },
                ]
            }
        ]
    },
]);

export default shoppingRouter;