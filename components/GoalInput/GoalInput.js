import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import { styles } from "./GoalInputStyles";

const GoalInput = ({ handleAddGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    handleAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={handleChangeText}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

export default GoalInput;
