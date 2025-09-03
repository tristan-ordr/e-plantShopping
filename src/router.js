import {createBrowserRouter} from "react-router";
import Root from "./Components/Root.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import Shopping from "./Components/Shopping.jsx";
import ProductList from "./Components/ProductList.jsx";
import CartItem from "./Components/CartItem.jsx";

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
        ]
    }
]);

export default shoppingRouter;