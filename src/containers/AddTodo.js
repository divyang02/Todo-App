import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AddTodo(props) {
  //   const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [todoText, changeTodoText] = useState("");

  const doAddTodo = (text) => {
    //redux store
    dispatch(addTodo(text));
    changeTodoText("");
  };

  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
      <TextInput
        onChangeText={(text) => changeTodoText(text)}
        value={todoText}
        placeholder="Eg. Create New Video"
        style={{
          borderWidth: 1,
          borderColor: "#f2f2e1",
          backgroundColor: "#eaeaea",
          height: 50,
          flex: 1,
          padding: 5,
        }}
      />
      <TouchableOpacity onPress={() => doAddTodo(todoText)}>
        <View
          style={{
            height: 50,
            backgroundColor: "#eaeaea",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="md-add"
            size={30}
            style={{ color: "#de9595", padding: 10 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
