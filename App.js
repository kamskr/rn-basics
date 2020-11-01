import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput/GoalInput";
import GoalItem from "./components/GoalItem/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      console.log("delete " + goalId);
      return [currentGoals.filter((goal) => goal.key !== goalId)];
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput handleAddGoal={addGoalHandler} visible={isAddMode} />
      {/* FlatList takes key or id if you dont have them you can map any property by using "keyExtractor" props */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            key={itemData.item.key}
            value={itemData.item.value}
            handleDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
