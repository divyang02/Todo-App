import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
