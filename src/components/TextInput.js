import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    error: {
    borderColor: '#ff0000',
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
  style,
  error && styles.error,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;