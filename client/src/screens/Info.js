import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { SIZES, COLORS, FONTS, data } from "../constants";
import { Entypo } from "@expo/vector-icons";
import MainLayout from "../MainLayout";
import { IconButton } from "../components";


const InfoCard = ({ info }) => {
    return (
        <View
            style={{
                flex: 1,
                borderBottomWidth: 1,
                paddingVertical: SIZES.radius,
                borderColor: COLORS.lightGray
            }}
        >
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    justifyContent: 'space-around',
                    paddingVertical: SIZES.base
                }}
            >
                <Image
                    source={info.profileImage}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray
                    }}
                />
                <Text style={{ ...FONTS.h5, color: COLORS.white }}>{info.publisher}</Text>
                <Text style={{ ...FONTS.body6, color: COLORS.lightGray3 }}>{info.createdAt}</Text>
            </View>
            {/* Body */}
            <Text style={{ ...FONTS.body5, color: COLORS.white }}>
                {info?.excerpt?.length > 160 ? info.excerpt.substring(0, 156) + "..." : info.excerpt}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    onPress={() => console.log("Read this item")}
                >
                    <Text style={{ ...FONTS.h5, color: COLORS.white }}>Lire...</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Info = () => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: COLORS.lightGray,
                    marginVertical: 4,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <IconButton
                    label={"Likes"}
                    icon={<Entypo name="heart" size={18} color={COLORS.white} />}
                    onPress={() => console.log("Like Sorting Button Pressed.")}
                />
                <IconButton
                    label={"Favorites"}
                    icon={<Entypo name="bucket" size={18} color={COLORS.white} />}
                    onPress={() => console.log("Fav Sorting Button Pressed.")}
                />
                <IconButton
                    label={"All"}
                    icon={<Entypo name="list" size={18} color={COLORS.white} />}
                    onPress={() => console.log("All Sorting Button Pressed.")}
                />
            </View>
        )
    };

    function renderClosableCard() {
        return (
            <View>
                <Shadow
                    distance={3}
                    startColor={COLORS.white}
                    finalColor={COLORS.primary}
                    offset={[2, 2]}
                    containerViewStyle={{
                        width: SIZES.width - (2 * SIZES.padding),
                        height: 115,
                        borderRadius: SIZES.radius,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            borderRadius: SIZES.radius,
                            width: SIZES.width - (2 * SIZES.padding),
                            backgroundColor: COLORS.white,
                            padding: 10
                        }}
                    >
                        {/* Close Button */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: "flex-end",
                            }}
                            onPress={() => console.log("Close Button pressed")}
                        >
                            <Entypo name="cross" size={24} color={COLORS.lightGray} />
                        </TouchableOpacity>
                        {/* Details  */}
                        <View
                            style={{
                                flexShrink: 1,
                            }}
                        >
                            <Text style={{ ...FONTS.h4 }}>Bill of 20-04-2022</Text>
                            <Text style={{ ...FONTS.body5 }}>Payment deadline: 04-05-2022</Text>
                        </View>
                        {/* Button & Price */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ ...FONTS.h3 }}>12,000 XOF</Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.lightGray,
                                    borderRadius: 5,
                                    paddingVertical: 3,
                                    paddingHorizontal: SIZES.padding
                                }}
                            >
                                <Text style={{ ...FONTS.h6, color: COLORS.white }}>Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Shadow>
            </View>
        )
    }

    function renderContent() {
        return (
            <FlatList
                data={data.infos}
                listKey="Infos"
                keyExtractor={item => `Info-${item._id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 5,
                    paddingHorizontal: SIZES.padding,
                }}
                ListHeaderComponentStyle={{
                    width: '100%',
                    paddingBottom: SIZES.radius
                }}
                // Closable Card
                ListHeaderComponent={renderClosableCard}
                renderItem={({ item }) => <InfoCard info={item} />}
            />
        )
    }

    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.primary
                }}
            >
                {/* Header */}
                {renderHeader()}

                {/* Content */}
                {renderContent()}
            </View>

        </MainLayout>
    )
}

export default Info;
