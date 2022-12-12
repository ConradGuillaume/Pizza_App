import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const Thank = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Pressable
        style={{ position: "absolute", zIndex: 5 }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={{ backgroundColor: "white", borderRadius: 50 }}
          source={require("../src/img/home.png")}
        />
      </Pressable>
      <Text
        style={{
          position: "absolute",
          color: "white",
          height: 150,
          width: "100%",
          textAlign: "center",
          textAlignVertical: "center",
          fontSize: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Merci pour votre fidélité{" "}
      </Text>
      <Image
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "contain",
        }}
        source={require("../src/img/Four.jpg")}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 0,
          color: "white",
          height: 150,
          width: "100%",
          textAlign: "center",
          textAlignVertical: "center",
          fontSize: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        A bientôt{" "}
      </Text>
    </View>
  );
};

export default Thank;
