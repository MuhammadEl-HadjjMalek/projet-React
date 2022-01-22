import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigations/AppNavigation";
import store from "./store";

export default function App() {

    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}