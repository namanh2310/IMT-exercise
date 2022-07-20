import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import React from "react";

const number = ({ handlePress }) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <View style={styles.BtnContainer}>
      {numbers.map((number, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handlePress(number)}
        >
          <Text style={styles.btnText}>{number}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button1} onPress={() => handlePress(0)}>
        <Text style={styles.btnText}>0</Text>
      </TouchableOpacity>
    </View>
  );
};

export default number;

const styles = StyleSheet.create({
  BtnContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "101%",
    height: "80%",
    padding: 0,
    margin: 0,
  },

  button: {
    width: "33%",
    height: "25%",
    backgroundColor: "#424242",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  button1: {
    width: "100%",
    height: "25%",
    backgroundColor: "#424242",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  btnText: {
    fontSize: 28,
    color: "white",
  },
});
