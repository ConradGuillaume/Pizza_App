import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

///IMPORT

const PizzaDetails = ({ route }: { route: any }) => {
  return (
    <View style={styles.chosenPizza}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Pizza: {route.params.nom}</Text>
        <Image style={styles.pizzaImg} source={route.params.img} />
        <Text style={styles.ingredients}>Composition:</Text>
        <Text style={styles.ingredients}>{route.params.ingredients}</Text>
        <Text>Allergène: {route.params.allergen} </Text>
      </View>
    </View>
  );
};

export default PizzaDetails;

///STYLE

const styles = StyleSheet.create({
  chosenPizza: {
    borderTopWidth: 3,
    borderTopColor: "green",
    borderWidth: 2,
    width: "100%",
    backgroundColor: "#B22222",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    borderWidth: 4,
    borderColor: "green",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#ae9880",
    justifyContent: "flex-start",
    width: "80%",
    height: 400,
  },
  pizzaImg: {
    justifyContent: "center",
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 15,
    marginBottom: 10,
    borderBottomWidth: 2,
    margin: 0,
  },
  ingredients: {
    fontWeight: "700",
    fontSize: 20,
  },
});
///STYLE
