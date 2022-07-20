import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate("Exercise 1")}
      >
        <Text style={styles.text}>Exercise 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate("Exercise 2")}
      >
        <Text style={styles.text}>Exercise 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate("Exercise 3")}
      >
        <Text style={styles.text}>Exercise 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate("Exercise 4")}
      >
        <Text style={styles.text}>Exercise 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate("Exercise 5")}
      >
        <Text style={styles.text}>Exercise 5</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    marginBottom: "10%",
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "rgba(34,115,254,255)",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
