import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const HeaderBar = ({ title }) => {
  return (
    <View
        style={{
            height: 100,
            alignItems: "flex-start",
            justifyContent: "center"
        }}
    >
      <Text
        style={{ color: COLORS.white, ...FONTS.h1 }}
      >
        { title }
      </Text>
    </View>
  );
};

export default HeaderBar;
