import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import TodoApp from "./src/TodoApp";
import { store, persistor } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View>
            <ActivityIndicator size={"large"} />
          </View>
        }
        persistor={persistor}
      >
        <TodoApp />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
