import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
