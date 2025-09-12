import { Outlet } from "react-router";
import store from "../store";
import {Provider} from "react-redux";
import { Amplify } from "aws-amplify";

export default function Root() {
    Amplify.configure({});

    return (
        <Provider store={store}>
            <Outlet />
        </Provider>
    )
}