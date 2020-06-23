import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "./colors";
function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.black,
  },
});

export default ListItemSeperator;
