import React from 'react';
import { FontAwesome, Feather } from "@expo/vector-icons";
import { View, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const BillInfo = ({ title, displayAmount, consInKw, containerStyle }) => {
    return (
        <View
            style={{ ...containerStyle }}
        >
            {/* Title & Date */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ ...FONTS.h4, color: COLORS.lightGray3 }}>
                    {title}
                </Text>
                <Text style={{ ...FONTS.h6, color: COLORS.lightGray3 }}>
                    Jeu, 05 2021
                </Text>
            </View>

            {/* Figures */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'flex-start'
                }}
            >
                <FontAwesome name="money" size={24} color={COLORS.lightGray3}  />
                <Text style={{ marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white }}>{displayAmount.toLocaleString()}</Text>
                <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}> XOF </Text>
            </View>

            {/* Electrical Consumption  */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}
            >
                {consInKw > 20 ? (
                    <Feather name="arrow-up-right" size={14} color={COLORS.red} style={{ paddingBottom: 3 }} />
                ) : (
                    <Feather name="arrow-down-left" size={14} color={COLORS.lightGreen} style={{ paddingBottom: 3 }} />
                )}
                <Text style={{
                    marginLeft: SIZES.base,
                    alignSelf: 'flex-end',
                    color: consInKw > 20 ? COLORS.red : COLORS.lightGreen,
                    ...FONTS.h4
                }}>{consInKw.toFixed(2)} Kw/Hr</Text>
            </View>
        </View>
    );
};

export default BillInfo;
