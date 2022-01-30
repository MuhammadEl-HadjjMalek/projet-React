import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { View, Animated } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { IconTextButton } from "../components";
import { COLORS, SIZES } from "../constants";

const MainLayout = ({ children }) => {

  const tabModalVisibility = useSelector(state => state.tabModalVisibility);
  const { visibility } = tabModalVisibility;

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    if (visibility) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
    }
  }, [visibility]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 320]
  })

  return (
    <View
      style={{
        flex: 1
      }}
    >
      {children}

      {/* Dimmed the background */}
      {visibility &&
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.transparentBlack,
            opacity: modalAnimatedValue
          }}
        >

        </Animated.View>
      }

      {/* Modal */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: modalY,
          width: "100%",
          padding: SIZES.padding,
          backgroundColor: COLORS.primary
        }}
      >
        <IconTextButton
          label="Facture Senelec"
          icon={<MaterialIcons name="electrical-services" size={24} color="black" />}
          onPress={() => console.log("Facture Senelec")}
        />

        <IconTextButton
          label="Woyofall"
          icon={<MaterialCommunityIcons name="alpha-w-box-outline" size={24} color="black" />}
          containerStyle={{
            marginTop: SIZES.base
          }}
          onPress={() => console.log("Woyofall")}
        />
      </Animated.View>

    </View>
  );
};

export default MainLayout;
