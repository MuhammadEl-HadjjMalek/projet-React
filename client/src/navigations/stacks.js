// Screens that must be stacked first then feed to 
// tab component
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BillDetail, Home } from "../screens";


const Stack = createStackNavigator();

const BillStack = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
            initialRouteName="Home"
        >
            <Stack.Screen name="Main" component={Home} />
            <Stack.Screen name="Detail" component={BillDetail} />
        </Stack.Navigator>
    )
};


export default BillStack;