import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SIZES } from "../constants";

const Chart = ({ containerStyle }) => {
    return (
        <View style={{ ...containerStyle }}>
            <LineChart
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            data: [24, 48, 94, 3, 4, 10]
                        }
                    ]
                }}
                width={SIZES.width} // from react-native
                height={120}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "transparent",
                    // backgroundGradientFrom: "#fb8c00",
                    // backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    // style: {
                    //     borderRadius: 5,
                    // },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 4,
                    borderRadius: 10
                }}
            />
        </View>
    );
};

export default Chart;
