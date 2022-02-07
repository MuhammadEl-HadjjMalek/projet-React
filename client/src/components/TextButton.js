import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';

const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress }) => {
  return (
    
    <TouchableOpacity
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            ...buttonContainerStyle
        }}
        onPress={onPress}
    >
        <Text
            style={{
                color: COLORS.black,
                ...FONTS.h3,
                ...labelStyle
            }}
        >
            {label}
        </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
