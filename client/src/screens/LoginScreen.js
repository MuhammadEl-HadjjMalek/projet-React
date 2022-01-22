import React from "react";
import logoImg from "../../assets/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, Image } from "react-native";
import { Formik } from "formik";
import loginStyle from "../styles/login";
import PhoneInput from "react-phone-number-input";

const LoginScreen = navData => {

    const [phoneNo, setPhoneNo] = useState("");

    const initialValues = { email: "", password: "" };

    const onSubmit = (values) => {
        console.log(values);
        navData.navigation.navigate("Home");
    }

    const toRegister = () => {
        navData.navigation.navigate("Register");
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height" }
        >
            <ScrollView>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => (
                        <View style={loginStyle.container}>
                            <View style={loginStyle.logo}>
                                <Image source={logoImg} style={loginStyle.image} />
                            </View>
                            <View>
                                <PhoneInput
                                    countries={"SENEGAL"}
                                    placeholder="Your phone number"
                                    value={phoneNo}
                                    onChange={setPhoneNo}
                                />
                                <PinInput />
                                <TouchableOpacity style={loginStyle.btn} onPress={props.handleSubmit}>
                                    <Text style={loginStyle.btnText}>Login</Text>
                                </TouchableOpacity>
                                <View style={loginStyle.registerContainer}>
                                    <Text style={loginStyle.registerText}>Don't have an account ?</Text>
                                    <TouchableOpacity onPress={toRegister}>
                                        <Text style={loginStyle.registerBtn}>Register</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;