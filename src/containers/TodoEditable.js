import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { toggleTodo, deleteTodo, updateTodo } from "../actions";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemToggleStatus from "../components/ListItemToggleStatus";
import AppText from "../components/AppText";
import colors from "../components/colors";

function MessagesScreen(props) {
  const [modalState, changeModalState] = useState(false);

  const [modalInput, changeModelInput] = useState({ id: 0, text: "" });

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const doToggleTodo = (id) => {
    //redux store
    dispatch(toggleTodo(id));
  };
  const doDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const doUpdate = (id, text) => {
    dispatch(updateTodo(id, text));
  };

  return (
    <Screen>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalState}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View style={styles.modal}>
          <TextInput
            onChangeText={(text) =>
              changeModelInput({ ...modalInput, text: text })
            }
            value={modalInput.text.toString()}
            placeholder="Eg. Create New Video"
            style={{
              borderWidth: 1,
              borderColor: "#f2f2e1",
              backgroundColor: "#eaeaea",
              height: 50,
              width: "100%",
              padding: 5,
              marginBottom: 10,
            }}
          />
          <TouchableHighlight
            onPress={() => {
              if (modalInput.text !== "") {
                doUpdate(modalInput.id, modalInput.text);
              }
              changeModelInput({ id: 0, text: "" });
              changeModalState(false);
            }}
          >
            <AppText style={styles.text}>Change title and Close window</AppText>
          </TouchableHighlight>
        </View>
      </Modal>
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
            onPress={() => {
              changeModalState(true);
              changeModelInput({ ...modalInput, id: item.id });
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => doDelete(item.id)} />
            )}
            renderLeftActions={() => (
              <ListItemToggleStatus onPress={() => doToggleTodo(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 100,
  },
});
