import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#1E1E1E",
    secondary: "#3B3B3B",

    white: "#fff",
    lightGreen: "#4BEE70",
    red: "#D84035",
    black: "#000000",
    gray: "#212125",
    gray1: "#1f1f1f",
    lightGray: "#3B3B3B",
    lightGray2: '#212125',
    lightGray3: '#757575',
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.8)',
    transparentBlack1: 'rgba(0, 0, 0, 0.4)',
};
export const SIZES = {
    // global sizes
    base: 6,
    font: 14,
    radius: 8,
    padding: 24,

    // font sizes
    largeTitle: 30,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    body6: 10,

    // app dimensions
    width,
    height
};


export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    h6: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h6, lineHeight: 20 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    body6: { fontFamily: "Poppins-Regular", fontSize: SIZES.body6, lineHeight: 20 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;