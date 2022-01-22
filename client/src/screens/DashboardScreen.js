import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions, FlatList, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { listBill } from "../actions/bill.action";
import BillItem from "../components/BillItem";


const DashboardScreen = () => {

    const dispatch = useDispatch();

    const billList = useSelector(state => state.billList);
    const { loading, error, bills } = billList;

    useEffect(() => {
        dispatch(listBill());
    }, [dispatch]);

    return (
        <SafeAreaView>
            <View style={tw.style('w-full flex items-center')}>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [24, 48, 94, 3, 4, 10]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 5,
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }}
                />
            </View>
            <View style={tw`p-4`}>
                {loading ? <div> Loading ...</div> : (
                    <FlatList
                        data={bills}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <View style={tw`p-4 grid grid-cols-3 shadow-lg rounded-md my-1 bg-white`}>
                                <View style={tw`col-span-2`}>
                                    <Text>{item.paidBy ? item.paidBy : "Not Yet Paid"}</Text>
                                    <Text>{item.to}</Text>
                                    <Text>{item.cost} XOF</Text>
                                </View>
                                <View>
                                    <Text>{item.consumption} kw/h</Text>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>

        </SafeAreaView>
    )
}

export default DashboardScreen;
