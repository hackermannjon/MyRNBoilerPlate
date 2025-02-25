// src/components/Input.tsx
import React from "react";
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input: React.FC<InputProps> = ({ containerStyle, ...props }) => (
  <TextInput style={[styles.input, containerStyle]} {...props} />
);
