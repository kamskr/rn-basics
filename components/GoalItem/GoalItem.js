import React from "react";
import { View, Text } from "react-native";
import { styles } from "./GoalItemStyles";

const GoalItem = ({ key, value }) => {
  return (
    <View key={key} style={styles.goalContainer}>
      <Text style={styles.goalText}>{value}</Text>
    </View>
  );
};

export default GoalItem;
