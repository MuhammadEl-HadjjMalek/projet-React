import React from 'react';
import { View, Text } from 'react-native';
import { FONTS, COLORS } from '../constants';

const TabIcon = ({ focused, icon, label, isPayment }) => {

    if (isPayment) {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent:"center",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: COLORS.black,
                }}
            >
                {icon}
                <Text
                    style={{ color: COLORS.white, ...FONTS.h6 }}
                >{label}</Text>
            </View>
        )
    } else {
        return (
            <View
                style={{ alignItems: "center", justifyContent: "center" }}
            >
                {icon}
                <Text
                    style={{
                        color: focused ? COLORS.white : COLORS.secondary
                    }}
                >{label}</Text>
            </View>
        )
    }
};

export default TabIcon;
