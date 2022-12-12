import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../feature/postSlice";
import { Pizza } from "./pizza";
import { RootState } from "../store";
////IMPORT

const Home = ({ navigation }: { navigation: any }) => {
  const cartTotal = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  ////CONST

  useEffect(() => {
    dispatch(getTotals(""));
  }, [cartTotal]);

  ////USE EFFECT


  const pizza: Pizza[] = [
    {
      nom: "Reine",
      img: require("../src/img/pizza_reine.jpg"),
      ingredients: "jambon, champignon,emmental",
      price: 8,
      allergen: "Gluten,Lait",
      key: "1",
    },
    {
      nom: "Chorizo",
      img: require("../src/img/pizza.jpg"),
      ingredients: "chorizo, champignon,emmental",
      price: 9,
      allergen: "Gluten,Lait",
      key: "2",
    },
    {
      nom: "Fromagère",
      img: require("../src/img/pizza_fromage.jpg"),
      ingredients: "mozza, bleu,emmental,raclette",
      price: 10,
      allergen: "Gluten,Lait",
      key: "3",
    },
  ];
///OBJET


  return (
    <View style={styles.body}>
      <Text style={styles.title}>PizzaBoot</Text>
      <View style={styles.Navigation}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15,
          }}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Image
            style={styles.NavigationImg}
            source={require("../src/img/cart.png")}
          />
          <Text
            style={{ textAlign: "center", fontSize: 17, fontWeight: "bold" }}
          >
            {cartTotal.cartTotal}
          </Text>
        </Pressable>
      </View>

      <View style={styles.PizzaBody}>
        <FlatList
          data={pizza}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PizzaDetails", item);
              }}
            >
              <View style={styles.PizzaContainer}>
                <Text style={styles.PizzaName}> La {item.nom}</Text>
                <Image style={styles.PizzaStyle} source={item.img} />
                <Pressable
                  style={styles.btn}
                  onPress={() => {
                    dispatch(addToCart(item));
                    navigation.navigate("Cart");
                  }}
                >
                  <Image source={require("../src/img/plus.png")} />
                </Pressable>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
////STYLE
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#B22222",
    height: "100%",
  },
  headerStyles: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  title: {
    flex: 0,
    position: "absolute",
    fontSize: 30,
    fontFamily: "serif",
    borderBottomWidth: 2,
    borderBottomColor: "green",
    left: 20,
    top: 25,
  },
  Navigation: {
    flex: 0,
    marginTop: 40,
    width: "auto",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  NavigationImg: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 2,
    marginRight: 8,
  },
  PizzaBody: {
    justifyContent: "space-around",
    height: "100%",
    alignItems: "center",
  },
  PizzaContainer: {
    width: 200,
    marginBottom: 11,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ae9880",
    borderWidth: 3,
    borderColor: "green",
    padding: 7,
    borderRadius: 15,
  },
  PizzaStyle: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  PizzaName: {
    fontSize: 17,
    fontWeight: "600",
  },
  btn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 5,
    right: 5,
  },
});
////STYLE