import OTPInputView from "@twotalltotems/react-native-otp-input";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { TextButton } from "../components";
import { COLORS, FONTS, images, SIZES } from "../constants";
import MainLayout from "../MainLayout";

const Login = ({ navigation }) => {

  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingVertical: SIZES.padding
        }}
      >
        <ImageBackground
          source={images.collab_bro}
          resizeMode="contain"
          style={{
            height: 200,
            width: '100%'
          }}
        />
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.white,
            }}
          >
            Log in to your Bi Gueneu Woyoff account and consult all
            your past and present bills.
          </Text>
        </View>
      </View>
    )
  };

  function renderSecretInput() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 3
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Votre Code Secret</Text>

        <OTPInputView
          pinCount={4}
          style={{
            width: '100%',
            height: 60,
          }}
          codeInputFieldStyle={{
            width: 50,
            height: 50,
            color: COLORS.white,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
            borderColor: COLORS.white,
            borderWidth: 1,
            ...FONTS.body4
          }}
          selectionColor={COLORS.white}
          onCodeFilled={(code) => { console.log(code) }}
        />
      </View>
    )
  };

  return (
    <MainLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.padding
          }}
        >
          {/* Header */}
          {renderHeader()}

          {/* Pin Input/Secret Code Input */}
          {renderSecretInput()}

          {/* Render Log In Button */}
          {/* Render Sign up Button */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: SIZES.padding
            }}
          >
            <TextButton
              label={"Se connecter"}
              buttonContainerStyle={{
                height: 50,
                width: SIZES.width - SIZES.padding * 2,
                marginHorizontal: SIZES.padding,
                borderRadius: SIZES.radius
              }}
              onPress={() => navigation.navigate("Dashboard")}
            // onPress={() => navigation.replace("SignIn")}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'center',
              alignItems: "baseline"
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body5
              }}
            >
              Pas de compte?
            </Text>
            <TextButton
              label={"Créer un compte"}
              buttonContainerStyle={{
                marginLeft: 3,
                backgroundColor: null
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h5
              }}
              onPress={() => navigation.navigate("Register")}
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </MainLayout>
  );
};

export default Login;
