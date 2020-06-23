import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddTodo from "./containers/AddTodo";
// import VisibleTodos from "./containers/VisibleTodos";
// import TodoList from "./containers/TodoList";
// import MessagesScreen from "./containers/MessagesScreen";
import TodoEditable from "./containers/TodoEditable";

function TodoApp(props) {
  return (
    <View style={styles.container}>
      <AddTodo />
      {/* <MessagesScreen /> */}
      <TodoEditable />
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
