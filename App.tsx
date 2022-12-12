import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { RootNavigator } from "./routes/RootNavigator";
import Home from "./Screen/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import { useDispatch } from "react-redux";
import { getTotals } from "./feature/postSlice";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B22222",
    alignItems: "center",
  },
});
