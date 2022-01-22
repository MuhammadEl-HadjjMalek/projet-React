import { Formik } from 'formik';
import logoImg from "../../assets/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from 'react';
import { Text, View, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import loginStyle from '../styles/login';

const RegisterScreen = ({ navigation }) => {

    const initialValues = {
        fullName: "",
        email: "",
        password: "",
    }

    const onSubmit = (values) => {
        console.log(values);
        navigation.navigate("Home");
    }

    const toLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
            <ScrollView>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <View style={loginStyle.container}>
                            <View style={loginStyle.logo}>
                                <Image source={logoImg} style={loginStyle.image} />
                            </View>
                            <View>
                            <TextInput
                                    style={loginStyle.inputBox}
                                    placeholder="Full Name"
                                    onChange={props.handleChange('fullName')}
                                    value={props.values.fullName}
                                />
                                <TextInput
                                    style={loginStyle.inputBox}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    onChange={props.handleChange('email')}
                                    value={props.values.email}
                                />
                                <TextInput
                                    style={loginStyle.inputBox}
                                    placeholder="Password"
                                    keyboardType="email-address"
                                    secureTextEntry={true}
                                    onChange={props.handleChange('password')}
                                    value={props.values.password}
                                />
                                <TouchableOpacity style={loginStyle.btn} onPress={props.handleSubmit}>
                                    <Text style={loginStyle.btnText}>Login</Text>
                                </TouchableOpacity>
                                <View style={loginStyle.registerContainer}>
                                    <Text style={loginStyle.registerText}>Already, have an account ?</Text>
                                    <TouchableOpacity onPress={toLogin}>
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

export default RegisterScreen;
