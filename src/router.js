import {createBrowserRouter} from "react-router";
import Root from "./Components/Root.jsx";
import LandingPage from "./Components/welcome/LandingPage.jsx";
import Shopping from "./Components/shopping/Shopping.jsx";
import ProductList from "./Components/shopping/ProductList.tsx";
import CartItem from "./Components/shopping/CartItem.jsx";
import Admin from "./Components/admin/Admin.jsx";
import Inventory from "./Components/admin/Inventory.jsx";
import Locations from "./Components/admin/Locations.jsx";

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
                path: 'admin',
                Component: Admin,
                children: [
                    { index: true, Component: Inventory },
                    { path: 'locations', Component: Locations },
                ]
            }
        ]
    },
]);

export default shoppingRouter;