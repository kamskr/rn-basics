import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={handleChangeText}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/* FlatList takes key or id if you dont have them you can map any property by using "keyExtractor" props */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View key={itemData.item.key} style={styles.goalContainer}>
            <Text style={styles.goalText}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
  goalContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  goalText: {},
});
