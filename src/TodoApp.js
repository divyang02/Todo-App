import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddTodo from "./containers/AddTodo";
import TodoEditable from "./containers/TodoEditable";

function TodoApp({ visibility }) {
  return (
    <View style={styles.container}>
      <AddTodo />
      <TodoEditable visibility={visibility} />
    </View>
  );
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
