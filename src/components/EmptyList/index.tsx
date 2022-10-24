import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { memo } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const EmptyListElement = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="clipboard-text-outline" size={56} color="#808080" />
      <Text style={styles.mainText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.subText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export const EmptyList = memo(EmptyListElement);
