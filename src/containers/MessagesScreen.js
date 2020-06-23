import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { toggleTodo, deleteTodo } from "../actions";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

function MessagesScreen(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const doToggleTodo = (id) => {
    //redux store
    dispatch(toggleTodo(id));
  };
  const doDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Screen>
      <FlatList
        data={todos}
        keyExtractor={(todos) => todos.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.text.toString()}
            subTitle={
              item.completed.toString() === "true"
                ? "Completed"
                : "Not completed"
            }
            // image={item.image}
            onPress={() => doToggleTodo(item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => doDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        // refreshing={refreshing}
        // onRefresh={() => {
        //   setMessages([
        //     {
        //       id: 2,
        //       title: "T2",
        //       description: "D2",
        //       image: require("../assets/mosh.jpg"),
        //     },
        //   ]);
        // }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
