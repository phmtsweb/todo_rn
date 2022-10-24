import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { styles } from "./styles";

interface TodoItemProps {
  isChecked: boolean;
  description: string;
  toogleCheck: () => void;
  handleRemoveTask: () => void;
}

export function TodoItem({
  toogleCheck,
  isChecked,
  description,
  handleRemoveTask,
}: TodoItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.clickableContainer} onPress={toogleCheck}>
        <Checkbox isChecked={isChecked} />
        <Text
          style={[
            styles.text,
            isChecked ? styles.textChecked : styles.textNoChecked,
          ]}
        >
          {description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.trashContainer}
        onPress={handleRemoveTask}
      >
        <MaterialIcons name="trash-can-outline" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
