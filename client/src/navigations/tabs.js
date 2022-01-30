import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Home, Info, Social, Payment, Search } from "../screens"
import { COLORS } from "../constants";
import { TabIcon } from "../components";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setPaymentModalVisibility } from "../actions/tab.action";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = () => {

    const dispatch = useDispatch();

    const tabModalVisibility = useSelector(state => state.tabModalVisibility);
    const { visibility } = tabModalVisibility;

    const _handlePaymentModalVisibility = () => {
        if (visibility) {
            dispatch(setPaymentModalVisibility(false));
        } else {
            dispatch(setPaymentModalVisibility(true));
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 100,
                        backgroundColor: COLORS.primary,
                        borderTopColor: "transparent",
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            if (!visibility) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={
                                            <Ionicons
                                                name="home"
                                                size={24}
                                                color={focused ? COLORS.white : COLORS.secondary}
                                            />
                                        }
                                        label="Home"
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (visibility) {
                                e.preventDefault()
                            }
                        }
                    }}
                />
                <Tab.Screen
                    name="Social"
                    component={Social}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            if (!visibility) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={
                                            <Ionicons
                                                name="md-people-circle-outline"
                                                size={24}
                                                color={focused ? COLORS.white : COLORS.secondary}
                                            />
                                        }
                                        label="Social"
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (visibility) {
                                e.preventDefault();
                            }
                        }
                    }}
                />
                <Tab.Screen
                    name="Payment"
                    component={Payment}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabIcon
                                    focused={focused}
                                    icon={
                                        <MaterialIcons
                                            name={ visibility ? "close" : "payments" }
                                            size={24}
                                            color={COLORS.white}
                                        />
                                    }
                                    label="Payment"
                                    isPayment={true}
                                />
                            )
                        },
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                                onPress={() => _handlePaymentModalVisibility()}
                            />
                        )
                    }}

                />
                <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            if (!visibility) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={
                                            <FontAwesome5
                                                name="newspaper"
                                                size={24}
                                                color={focused ? COLORS.white : COLORS.secondary}
                                            />
                                        }
                                        label="Info"
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (visibility) {
                                e.preventDefault();
                            }
                        }
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            if (!visibility) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={
                                            <FontAwesome5
                                                name="search"
                                                size={24}
                                                color={focused ? COLORS.white : COLORS.secondary}
                                            />
                                        }
                                        label="Search"
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (visibility) {
                                e.preventDefault();
                            }
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

{/* <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Menu" component={MenuScreen} />
        <Drawer.Screen name="Achat credit woyofal" component={AchatScreen} />
         <Drawer.Screen name="Rechargement credit woyofal" component={RechargeScreen} />
        <Drawer.Screen name="Historique" component={HistoriqueScreen} />
        <Drawer.Screen name="Options" component={OptionsScreen} />
      </Drawer.Navigator>
    </NavigationContainer> */}

export default Tabs;