import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import Tabs from "./src/navigations/tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import store from "./store";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register } from "./src/screens";
import { StatusBar } from "react-native";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

export default function App() {

    const [isFontLoaded] = useFonts({
        "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
        "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf")
    });

    if (!isFontLoaded) {
        return <AppLoading />
    }

    return (
        <Provider store={store}>

            <StatusBar barStyle="light-content" />

            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="Register"
                >
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Dashboard" component={Tabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}