import AntDesignIcons from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { TodoItem } from "../../components/TodoItem";
import { styles } from "./styles";

interface TaskData {
  id: string;
  description: string;
  isFinished: boolean;
}

export function Home() {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const totalFinished = tasks.reduce((acc, curr) => {
    return curr.isFinished ? acc + 1 : acc;
  }, 0);

  function handleAddTask(description: string) {
    const task = {
      id: uuid.v4() as string,
      description: description,
      isFinished: false,
    };

    setTasks((state) => [task, ...state]);
    setTaskDescription("");
  }

  function handleRemoveTask(id: string) {
    Alert.alert(
      "Remover",
      "Você deseja remover esta tarefa? Ela não poderá ser recuperada.",
      [
        {
          text: "Sim",
          onPress: () =>
            setTasks((state) => state.filter((task) => task.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  function toogleCheck(id: string) {
    const newTasks = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          isFinished: !task.isFinished,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.inputText}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddTask(taskDescription)}
          >
            <AntDesignIcons name="pluscircleo" size={16} color="#f2f2f2" />
          </TouchableOpacity>
        </View>
        <View style={styles.summary}>
          <View style={styles.contentSummary}>
            <Text style={styles.createdLabel}>Criadas</Text>
            <View style={styles.notification}>
              <Text style={styles.textNotification}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.contentSummary}>
            <Text style={styles.finishedLabel}>Concluídas</Text>
            <View style={styles.notification}>
              <Text style={styles.textNotification}>{totalFinished}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              isChecked={item.isFinished}
              toogleCheck={() => toogleCheck(item.id)}
              description={item.description}
              handleRemoveTask={() => handleRemoveTask(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </SafeAreaView>
  );
}
