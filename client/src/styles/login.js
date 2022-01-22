import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        minHeight: "100vh"
    },
    logo: {
        alignItems: "center",
        marginBottom: 40,
    },
    image: {
        width: 100,
        height: 100
    },
    inputBox: {
        width: 300,
        backgroundColor: "#B6BFC4",
        borderRadius: 25,
        padding: 16,
        fontSize: 16,
        marginVertical: 10
    },
    btn: {
        width: 300,
        backgroundColor: "#738289",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    btnText: {
        fontSize: 16,
        fontWeight: '500',
        color: "#fff",
        textAlign: "center"
    },
    registerContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    registerText: {
        color: '#738289',
        fontSize: 16
    },
    registerBtn: {
        color: '#738289',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default loginStyle;