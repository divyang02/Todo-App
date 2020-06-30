import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TodoListScreen from "./screens/TodoListScreen";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() =>
          navigation.navigate("TodoList", {
            visibility: "ALL",
          })
        }
        title="All Todos"
      />
      <Button
        onPress={() =>
          navigation.navigate("TodoList", {
            visibility: "COMPLETED",
          })
        }
        title="Completed Todos"
      />
      <Button
        onPress={() =>
          navigation.navigate("TodoList", {
            visibility: "INCOMPLETE",
          })
        }
        title="Incomplete Todos"
      />
    </View>
  );
}

const Drawer = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TodoList" component={TodoListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
