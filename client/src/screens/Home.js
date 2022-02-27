import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { BillInfo, Chart, IconTextButton } from "../components";
import { COLORS, data, FONTS, SIZES } from "../constants";
import MainLayout from "../MainLayout";


const { billData } = data;

const HomeScreen = ({ navigation }) => {

    function renderButtons() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    marginVertical: 5,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
                }
            >
                <IconTextButton
                    label="View"
                    icon={<FontAwesome name="eye" size={20} color="black" />}
                    containerStyle={{
                        flex: 1,
                        height: 40,
                    }}
                    onPress={() => console.log("View")}
                />

                <IconTextButton
                    label="Pay Now"
                    icon={<Entypo name="stopwatch" size={20} color="black" />}
                    containerStyle={{
                        flex: 1,
                        height: 40,
                        width: 60
                    }}
                    onPress={() => console.log("Pay Now")}
                />
            </View>
        )
    }

    const renderBillInfoSection = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.base,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    backgroundColor: COLORS.gray
                }}
            >
                {/* Bill Info */}
                <BillInfo
                    title="Votre Facture"
                    displayAmount="25,000"
                    consInKw={23.4}
                    containerStyle={{
                        marginTop: 10,
                        padding: SIZES.base
                    }}
                />

            </View>
        )
    }

    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black
                }}
            >

                {/* Header Section - Bill Info */}
                {renderBillInfoSection()}

                {/* Buttons View & Payment */}
                {renderButtons()}


                {/* Latest Bills */}
                <FlatList
                    data={billData}
                    keyExtractor={item => item._id}
                    contentContainerStyle={{
                        marginTop: SIZES.padding,
                    }}
                    ListHeaderComponent={
                        <View
                            style={{ marginBottom: SIZES.radius }}
                        >

                            {/* Chart */}
                            <Chart
                                containerStyle={{
                                    width: '100%',
                                }}
                            />
                            <Text style={{ color: COLORS.white, ...FONTS.h3, fontSize: 18, paddingHorizontal: SIZES.padding, marginTop: SIZES.radius }}>
                                Factures Recentes
                            </Text>
                        </View>
                    }
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    height: 65,
                                    paddingHorizontal: 5,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderBottomWidth: 0.4,
                                    borderBottomColor: COLORS.lightGray3,
                                    paddingHorizontal: SIZES.padding
                                }}
                                onPress={() => navigation.navigate("Detail", { item })}
                            >
                                {/* Icon */}
                                <View
                                    style={{ width: 35 }}
                                >
                                    <Ionicons name="md-receipt" size={28} color={item.isPaid ? COLORS.lightGreen : COLORS.red} />
                                </View>
                                {/* From | Cons - Price */}
                                <View
                                    style={{
                                        flex: 3,
                                    }}
                                >
                                    <Text style={{ color: COLORS.lightGray3, ...FONTS.h6 }}>
                                        {item.from}
                                    </Text>
                                    <Text style={{ color: COLORS.white, ...FONTS.h5 }}>
                                        Charge: {item.cost} XOF
                                    </Text>

                                    {/* Electrical Consumption */}
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            marginTop: -3
                                        }}
                                    >
                                        {item.consInKw > 20 ? (
                                            <Feather name="arrow-up-right" size={10} color={COLORS.red} />
                                        ) : (
                                            <Feather name="arrow-down-left" size={10} color={COLORS.lightGreen} />
                                        )}
                                        <Text style={{
                                            color: item.consInKw > 20 ? COLORS.red : COLORS.lightGreen,
                                            ...FONTS.h6
                                        }}>{item.consInKw.toFixed(2)} Kw/Hr</Text>
                                    </View>
                                </View>

                                {/* More Info */}
                                <View
                                    style={{
                                        flex: 1,
                                        alignContent: 'space-between',
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: "right",
                                            color: COLORS.lightGray3,
                                            ...FONTS.h6
                                        }}
                                    >
                                        Date
                                    </Text>

                                    {item.isPaid ? (
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end"
                                            }}
                                        >
                                            <Text style={{ color: COLORS.lightGreen, ...FONTS.h6 }}>Payé</Text>
                                            <Entypo name="check" size={10} color={COLORS.lightGreen} />
                                        </View>
                                    ) : (
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end"
                                            }}
                                        >
                                            <Text style={{ color: COLORS.red, ...FONTS.h6 }}>Non Payé</Text>
                                            <FontAwesome name="exclamation" size={10} color={COLORS.red} />
                                        </View>
                                    )}

                                </View>

                            </TouchableOpacity>
                        )
                    }}
                    ListFooterComponent={
                        <View style={{ marginBottom: 50 }} />
                    }
                />
            </View>
        </MainLayout >
    )
}

export default HomeScreen;
