import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screen/Home";
import PizzaDetails from "../Screen/PizzaDetails";
import Cart from "../Screen/Cart";
import Thank from "../Screen/Thank";

///IMPORT

export type RouteParams = {
  Home: undefined;
  PizzaDetails: undefined;
  Cart: undefined;
  Thank: undefined;
};
/// EXPORT

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PizzaDetails"
          component={PizzaDetails}
          options={{
            title: "Composition",
            headerStyle: { backgroundColor: "#ae9880" },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Mon panier",
            headerStyle: { backgroundColor: "#ae9880" },
          }}
        />
        <Stack.Screen
          name="Thank"
          component={Thank}
          options={{
            title: "Commande en cours ",
            headerStyle: { backgroundColor: "#ae9880" },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
