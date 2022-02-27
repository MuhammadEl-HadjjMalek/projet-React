import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, FlatList, Text } from "react-native";
import { COLORS, FONTS, SIZES, data } from "../constants";
import MainLayout from "../MainLayout";
import { IconButton } from "../components";


const CustomCard = ({ item }) => {

  return (
    <View
      style={{
        borderBottomWidth: 0.4,
        borderColor: COLORS.lightGray3
      }}
    >
      {/* Phone number & Date */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text style={{ ...FONTS.h5, color: COLORS.white }}>{item.user.phoneNo}</Text>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 2,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.lightGray3
          }}
          onPress={() => console.log("Payment pressed.")}
        >
          <Text style={{ ...FONTS.h5, color: COLORS.white }}>Payer</Text>
        </TouchableOpacity>
      </View>
      {/* Price & Pay Button */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: "flex-end",
          paddingVertical: 5
        }}
      >
        <Text style={{ ...FONTS.h5, color: COLORS.white }}>Tt. Price: {`${item.user.bill.cost} XOF`}</Text>
        <Text style={{ ...FONTS.h6, color: COLORS.lightGray3 }}>{item.user.bill.createdAt}</Text>

      </View>
    </View>
  )
}

const Social = () => {

  function renderSearchBar() {
    return (
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.base,
          backgroundColor: COLORS.white,
          height: 40,
          marginTop: 10,
          marginLeft: 5,
          borderRadius: 20,
        }}
      >
        <TextInput
          style={{
            flexGrow: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: 20,
          }}
          placeholder="Search..."
        />
        <Entypo name="magnifying-glass" size={24} color="black" />
      </View>
    )
  };

  function renderFilters() {
    return (
      <View
        style={{
          marginLeft: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <IconButton
          label={"Recent"}
          onPress={() => console.log("Recent Pressed.")}
          icon={<Ionicons name="ios-trending-down" size={18} color={COLORS.white} />}
        />
        <IconButton
          label={"Price"}
          onPress={() => console.log("Price Pressed.")}
          icon={<Ionicons name="ios-trending-down" size={18} color={COLORS.white} />}
        />
      </View>
    )
  }

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          paddingBottom: 5,
          borderColor: COLORS.lightGray3
        }}
      >

        {/* Search */}
        {renderSearchBar()}
        {renderFilters()}
      </View>
    )
  };

  function renderContentHeader() {
    return (
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.white
        }}
      >
        List of approved entities
      </Text>
    )
  }

  function renderContent() {
    return (
      <FlatList
        data={data.socials}
        listKey="Socials"
        keyExtractor={item => `Social-${item._id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 5,
          paddingHorizontal: SIZES.padding,
        }}
        ListHeaderComponentStyle={{
          width: '100%',
          paddingBottom: SIZES.radius
        }}
        // Content Header
        ListHeaderComponent={renderContentHeader()}
        renderItem={({ item }) => <CustomCard item={item} />}
      />
    )
  }

  return (
    <MainLayout>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
        }}
      >
        {/* Header with Search-bar & filters */}
        {renderHeader()}

        {/* Content */}
        {renderContent()}

      </View>
    </MainLayout>
  );
};

export default Social;
