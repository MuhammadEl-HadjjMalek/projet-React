import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const IconTextButton = ({ label, icon, containerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                borderRadius: SIZES.radius,
                marginHorizontal: 10,
                backgroundColor: COLORS.white,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {icon}
            <Text
                style={{
                    marginLeft: SIZES.base,
                    ...FONTS.h4
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default IconTextButton;
