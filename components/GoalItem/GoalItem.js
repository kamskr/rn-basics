import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./GoalItemStyles";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.handleDelete(props.key)}>
      <View key={props.key} style={styles.goalContainer}>
        <Text style={styles.goalText}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
