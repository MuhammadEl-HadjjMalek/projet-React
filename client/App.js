import React from "react";
import { Provider } from "react-redux";
import Tabs from "./src/navigations/tabs";
import store from "./store";

export default function App() {

    return (
        <Provider store={store}>
            <Tabs />
        </Provider>
    );
}