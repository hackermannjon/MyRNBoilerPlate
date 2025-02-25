// src/screens/Home/index.tsx
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao ExpoFirebaseBoilerplate!</Text>
    </View>
  );
};

export default HomeScreen;
