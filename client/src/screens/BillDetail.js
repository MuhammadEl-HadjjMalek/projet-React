import React from "react";
import { View, Text } from "react-native";

const BillDetail = ({ route, navigation }) => {

    const { item } = route.params;

    return (
        <View>
            <Text>{item._id}</Text>
        </View>
    )
}

export default BillDetail