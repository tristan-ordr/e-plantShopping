import {createBrowserRouter} from "react-router";
import Root from "./Components/Root.jsx";
import LandingPage from "./Components/welcome/LandingPage.jsx";
import Shopping from "./Components/shopping/Shopping.jsx";
import ProductList from "./Components/shopping/ProductList.jsx";
import CartItem from "./Components/shopping/CartItem.jsx";
import Admin from "./Components/admin/Admin.jsx";
import Login from "./Components/admin/Login.jsx";
import Transactions from "./Components/admin/Transactions.jsx";
import Inventory from "./Components/admin/Inventory.jsx";

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
                children: [
                    { index: true, Component: Login },
                    { path: 'home', Component: Admin},
                    { path: 'inventory', Component: Inventory},
                    { path: 'transactions', Component: Transactions},
                ]
            }
        ]
    },
]);

export default shoppingRouter;