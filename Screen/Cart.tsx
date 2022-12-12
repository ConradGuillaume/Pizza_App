import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  decreaseQtity,
  getTotals,
  increaseQtity,
  removeFromCart,
} from "../feature/postSlice";
import { RootState } from "../store";
////IMPORT

const Cart = ({ navigation }: { navigation: any }) => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  ////CONST

  const [onScreen, setOnScreen] = useState(false);
  const [empty, setEmpty] = useState(true);

  ////STATE

  useEffect(() => {
    dispatch(getTotals(""));
    if (cartTotal.cartTotalPrice === 0) {
      setEmpty(true);
    } else {
      setOnScreen(true);
      setEmpty(false);
    }
  }, [cartTotal]);
  ////Effect

  return (
    <>
      <View
        style={{
          backgroundColor: "#B22222",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {onScreen && (
          <FlatList
            style={{
              width: "100%",
              backgroundColor: "#B22222",
              marginBottom: 30,
            }}
            data={cart}
            renderItem={({ item }: { item: any }) => (
              <View style={styles.wrapper}>
                <Text style={styles.totalPrice}>
                  Total :{item.price * item.cartQuantity}€
                </Text>
                <View style={styles.btnContainer}>
                  <View style={styles.btn}>
                    <Text
                      onPress={() => {
                        dispatch(decreaseQtity(item));
                      }}
                      style={styles.btnPlusMinus}
                    >
                      -
                    </Text>
                    <Text style={styles.Quantity}>{item.cartQuantity}</Text>
                    <Text
                      onPress={() => {
                        dispatch(increaseQtity(item));
                      }}
                      style={styles.btnPlusMinus}
                    >
                      +
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                    style={styles.delete}
                  >
                    <Text style={{ color: "red", fontWeight: "bold" }}>
                      Annuler
                    </Text>
                  </Pressable>
                </View>
                <Text style={styles.PizzaName}>
                  {" "}
                  Pizza: {item.nom} {item.price}€
                </Text>
                <Image style={styles.PizzaStyle} source={item.img} />
                <Text style={styles.ingredients}>Composition:</Text>
                <Text style={styles.ingredients}>{item.ingredients}</Text>
              </View>
            )}
          />
        )}
        <View style={styles.footer}>
          <Text
            style={{
              backgroundColor: "red",
              flex: 1,
              padding: 5,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15,
            }}
            onPress={() => {
              dispatch(clearCart([]));
            }}
          >
            Annuler{" "}
          </Text>
          <Text
            style={{
              backgroundColor: "white",
              flex: 1,
              padding: 5,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            mon panier : {cartTotal.cartTotalPrice} €
          </Text>
          <Text
            onPress={() => {
              navigation.navigate("Thank");
            }}
            style={{
              backgroundColor: "green",
              flex: 1,
              padding: 5,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Commander{" "}
          </Text>
        </View>
        {empty && (
          <View style={styles.empty}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              panier vide
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Cart;
////STYLE
const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginTop: 5,
    marginBottom: 5,
    borderColor: "green",
    alignItems: "center",
    backgroundColor: "#ae9880",
    width: "100%",
  },

  myPizza: {
    borderWidth: 2,
  },
  PizzaStyle: {
    width: 180,
    height: 180,
    borderRadius: 150,
  },
  PizzaName: {
    justifyContent: "flex-start",
    width: "100%",
    fontSize: 19,
    fontWeight: "600",
  },
  ingredients: {
    width: "100%",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    bottom: 10,
    fontWeight: "700",
    fontSize: 20,
  },
  Quantity: {
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "900",
    width: "60%",
  },
  btn: {
    flexDirection: "row",
    borderWidth: 2,
    backgroundColor: "black",
    width: 80,
    justifyContent: "space-around",
    borderRadius: 50,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 30,
    bottom: 15,
    right: 15,
  },
  btnPlusMinus: {
    height: "100%",
    width: "20%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    color: "white",
  },
  delete: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: 2,
  },
  totalPrice: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    padding: 5,
    width: 90,
    color: "white",
    backgroundColor: "green",
    right: 0,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row-reverse",
  },
  empty: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
////STYLE