import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./GoalInputStyles";

const GoalInput = ({ handleAddGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.textInput}
        onChangeText={handleChangeText}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => handleAddGoalHandler(enteredGoal)} />
    </View>
  );
};

export default GoalInput;
