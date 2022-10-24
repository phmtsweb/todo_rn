import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface CheckboxProps {
  isChecked: boolean;
}

export function Checkbox({ isChecked }: CheckboxProps) {
  return (
    <View
      style={[
        styles.container,
        isChecked ? styles.containerChecked : styles.containerNoChecked,
      ]}
    >
      {isChecked && <View style={styles.mark} />}
    </View>
  );
}
