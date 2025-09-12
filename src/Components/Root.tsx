import { Outlet } from "react-router";
import store from "../store";
import {Provider} from "react-redux";

export default function Root() {
    return (
        <Provider store={store}>
            <Outlet />
        </Provider>
    )
}