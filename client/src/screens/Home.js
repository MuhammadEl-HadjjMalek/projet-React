import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { BillInfo, Chart, IconTextButton } from "../components";
import { COLORS, data, FONTS, SIZES } from "../constants";
import MainLayout from "../MainLayout";


const { billData } = data;

const HomeScreen = () => {

    const renderBillInfoSection = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    paddingBottom: 5,
                    backgroundColor: COLORS.gray
                }}
            >
                {/* Bill Info */}
                <BillInfo
                    title="Votre Facture"
                    displayAmount="25,000"
                    consInKw={23.4}
                    containerStyle={{
                        marginTop: 10
                    }}
                />
                {/* Buttons */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 18,
                        marginBottom: -15,
                        paddingHorizontal: SIZES.radius
                    }}
                >
                    <IconTextButton
                        label="Voir"
                        icon={<FontAwesome name="eye" size={24} color="black" />}
                        containerStyle={{
                            flex: 1,
                            height: 40,
                            marginRight: SIZES.radius,
                        }}
                        onPress={() => console.log("View")}
                    />

                    <IconTextButton
                        label="Regler"
                        icon={<Entypo name="stopwatch" size={24} color="black" />}
                        containerStyle={{
                            flex: 1,
                            height: 40,
                            marginRight: SIZES.radius,
                        }}
                        onPress={() => console.log("Pay Now")}
                    />
                </View>

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

                {/* Chart */}
                <Chart
                    containerStyle={{
                        marginTop: SIZES.padding
                    }}
                />

                {/* Latest Bills */}
                <FlatList
                    data={billData}
                    keyExtractor={item => item._id}
                    contentContainerStyle={{
                        marginTop: 30,
                        paddingHorizontal: SIZES.padding
                    }}
                    ListHeaderComponent={
                        <View
                            style={{ marginBottom: SIZES.radius }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3, fontSize: 18 }}>
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
                                    borderBottomColor: COLORS.lightGray3
                                }}
                                onPress={() => console.log("Button Pressed.")}
                            >
                                {/* Icon */}
                                <View
                                    style={{ width: 35 }}
                                >
                                    <Ionicons name="md-receipt" size={24} color={item.isPaid ? COLORS.lightGreen : COLORS.red} />
                                </View>
                                {/* From | Cons - Price */}
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>
                                        {item.from}
                                    </Text>
                                    <Text style={{ color: COLORS.white, ...FONTS.h5 }}>
                                        Charge: {item.cost} XOF
                                    </Text>

                                    {/* Electrical Consumption */}
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "flex-end",
                                            marginTop: -5
                                        }}
                                    >
                                        {item.consInKw > 20 ? (
                                            <Feather name="arrow-up-right" size={10} color={COLORS.red} style={{ paddingBottom: 3 }} />
                                        ) : (
                                            <Feather name="arrow-down-left" size={10} color={COLORS.lightGreen} style={{ paddingBottom: 3 }} />
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
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: "right",
                                            color: COLORS.lightGray3,
                                            ...FONTS.h5
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
                                            <Text style={{ color: COLORS.lightGreen, ...FONTS.h4 }}>Payé</Text>
                                            <Entypo name="check" size={18} color={COLORS.lightGreen} />
                                        </View>
                                    ) : (
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "flex-end"
                                            }}
                                        >
                                            <Text style={{ color: COLORS.red, ...FONTS.h4 }}>Non Payé</Text>
                                            <FontAwesome name="exclamation" size={18} color={COLORS.red} />                                        
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
