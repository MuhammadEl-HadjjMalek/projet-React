import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { HeaderBar } from "../components";
import { COLORS, FONTS, SIZES, data } from "../constants";
import MainLayout from "../MainLayout";
import { Octicons, Entypo } from "@expo/vector-icons";

const { profile } = data;

const SectionTitle = ({ title }) => {
    return (
        <View
            style={{
                marginTop: SIZES.padding
            }}
        >
            <Text
                style={{
                    color: COLORS.lightGray3,
                    ...FONTS.h4
                }}
            >
                {title}
            </Text>
        </View>
    )
}

const Setting = ({ title, value, type, unit, onPress }) => {
    if (type === "button") {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    height: 50,
                    alignItems: "center"
                }}
                onPress={onPress}
            >
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h4 }}>{title}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Text style={{ marginLeft: SIZES.radius, color: COLORS.lightGray3, ...FONTS.h4 }}>
                        {value} {unit}
                    </Text>
                    <Entypo name="chevron-right" size={24} color={COLORS.white} />
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 50,
                    alignItems: "center"
                }}
            >
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h4}}>
                    {title}
                </Text>

                <Switch 
                    value={value}
                    onValueChange={() => onPress(value)}
                />
            </View>
        )
    }
}

const Settings = () => {

    const [faceId, setFaceId] = useState(true);

    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.black
                }}
            >

                {/* Header */}
                <HeaderBar title="Paramètres" />

                {/* Details */}
                <ScrollView>
                    {/* Email & User ID Section */}
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: SIZES.radius
                        }}
                    >
                        {/* Email & ID */}
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
                                {profile.email}
                            </Text>
                            <Text style={{ color: COLORS.lightGray3, ...FONTS.body5 }}>ID: {profile.id}</Text>
                        </View>
                        {/* Status */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Octicons name="verified" size={18} color={profile.isVerified ? COLORS.lightGreen : COLORS.red} />
                            <Text
                                style={{
                                    marginLeft: SIZES.base,
                                    color: profile.isVerified ? COLORS.lightGreen : COLORS.red
                                }}
                            >
                                Verifié
                            </Text>
                        </View>
                    </View>

                    {/* APP */}
                    <SectionTitle title="Alertes" />

                    <Setting
                        title="Max Consommation"
                        value={profile.maxConsInKw}
                        unit={"Kw/Hr"}
                        type="button"
                        onPress={() => console.log("Consumption")}
                    />

                    {/* App */}
                    <SectionTitle title="App" />

                    <Setting
                        title="Apparence"
                        value={"Dark"}
                        type="button"
                        onPress={() => console.log("Appearance")}
                    />

                    <Setting
                        title="Langue"
                        value={profile.language === "en" ? "English" : "French" }
                        type="button"
                        onPress={() => console.log("Language")}
                    />


                    {/* Security */}
                    <SectionTitle title="Securité" />
                    <Setting
                        title="FaceID"
                        value={faceId}
                        unit=""
                        type="switch"
                        onPress={() => setFaceId(!faceId)}
                    />
                    <Setting
                        title="Code Secret"
                        value=""
                        unit=""
                        type="button"
                        onPress={() => console.log("Secret Code")}
                    />
                    <Setting
                        title="Changer Code Secret"
                        value=""
                        unit=""
                        type="button"
                        onPress={() => console.log("Change Secret Code")}
                    />

                    

                </ScrollView>
            </View>
        </MainLayout>
    )
}

export default Settings;
