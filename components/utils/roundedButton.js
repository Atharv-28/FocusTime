import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from './Colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 70,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: 15,
    width: 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: { 
    color: colors.white,
    fontSize: 60 },
});
