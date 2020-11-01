import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./GoalItemStyles";

const GoalItem = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.goalContainer}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
