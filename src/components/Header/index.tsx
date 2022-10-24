import React from "react";
import { Image, SafeAreaView } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/logo.png")} />
    </SafeAreaView>
  );
}
