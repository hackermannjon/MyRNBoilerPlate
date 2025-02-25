// src/theme/unistyles.ts
import { StyleSheet } from "react-native";
import { Colors } from "./colors";
import { Fonts } from "./fonts";
import { Paddings } from "./paddings";

export const theme = {
  Colors,
  Fonts,
  Paddings,
};

export const createStyles = (styles: any) => {
  return StyleSheet.create(styles);
};
