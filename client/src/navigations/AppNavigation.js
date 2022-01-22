import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
import DashboardScreen from "../screens/DashboardScreen";
import BillDetailsScreen from "../screens/BillDetailsScreen";
import SearchScreen from "../screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Dashboard Stack
const dashboardNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="dashboard"
                component={DashboardScreen}
                options={{ title: "Dashboard" }}
            />
            <Stack.Screen
                name="bill-details"
                component={BillDetailsScreen}
                options={{ title: "Details" }}
            />
        </Stack.Navigator>
    );
};

// Search Navigator
const searchNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="search" component={SearchScreen} options={{ title: "Search" }} />
        </Stack.Navigator>
    )
}

// App [bottom]-navigation
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let icon;
                        if (route.name === "Home") {
                            icon = "home";
                        } else if ( route.name === "Search") {
                            icon = "search";
                        }
                        return <Ionicons name={icon} size={24} />
                    },
                    headerShown: false
                })}
                
            >
                <Tab.Screen name="Home" component={dashboardNav} />
                <Tab.Screen name="Search" component={searchNav} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
