import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../constants';

const IconButton = ({ label, onPress, icon, buttonStyle}) => {
  return (
    <TouchableOpacity
        style={{
            paddingVertical: 2,
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            ...buttonStyle
        }}
        onPress={onPress}
    >
        {icon}
      <Text style={{ color: COLORS.white, ...FONTS.h6 }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default IconButton;