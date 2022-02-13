import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Platform
} from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Entypo } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, FONTS, images, SIZES, } from "../constants";
import { TextInput } from "react-native-gesture-handler";
import { TextButton } from "../components";


const Register = ({ navigation }) => {

  const renderHeader = () => {
    return (
      <View
        style={{
          height: 160,
          width: '100%',
          marginTop: SIZES.base
        }}
      >
        <ImageBackground
          source={images.electrician}
          resizeMode="contain"
          style={{
            height: '90%',
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
              ...FONTS.h1,
              color: COLORS.white,
            }}
          >
            Bi Gueneu Woyoff
          </Text>
        </View>
      </View>
    )
  };

  const renderForm = () => {
    return (
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 3,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Phone Number */}
        <View
          style={{ flex: 1, marginTop: 3 }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Numero Telephone</Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            {/* Country Code */}
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                marginHorizontal: 5,
                borderBottomColor: COLORS.secondary,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body4
              }}
              onPress={() => console.log("Show Modal")}
            >
              <View
                style={{ justifyContent: 'center' }}
              >
                <Entypo name="chevron-down" size={15} color={COLORS.white} />
              </View>
              <View
                style={{ justifyContent: 'center', marginLeft: 5 }}
              >
                <Image
                  source={images.senegal_flag}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30
                  }}
                />
              </View>
              <View
                style={{ justifyContent: 'center', marginLeft: 5 }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>+221</Text>
              </View>
            </TouchableOpacity>

            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.secondary,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body4
              }}
              placeholder="Entrez votre numero."
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.secondary}
            />
          </View>
        </View>

        {/* OTP Inputs */}
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

      </KeyboardAwareScrollView>
    )
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >

      <View
        style={{
          backgroundColor: COLORS.primary,
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            flex: 1
          }}
        >
          {renderHeader()}
          {/* Divider */}
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              marginVertical: SIZES.padding,
              backgroundColor: COLORS.secondary
            }}
          />

          {renderForm()}

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
              label={"Creer un compte"}
              buttonContainerStyle={{
                height: 50,
                width: SIZES.width - SIZES.padding * 2,
                marginHorizontal: SIZES.padding,
                borderRadius: SIZES.radius
              }}
              onPress={() => console.log("Sign Up pressed.")}
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
              Vous avez déjà un compte?
            </Text>
            <TextButton
              label={"Se connecter"}
              buttonContainerStyle={{
                marginLeft: 3,
                backgroundColor: null
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h5
              }}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
