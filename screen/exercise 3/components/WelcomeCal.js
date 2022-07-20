import { Button, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeCal = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome")}
          style={styles.backBtn}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.welcomeArea}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Button
          title="TRUY CẬP"
          onPress={() => {
            setTimeout(() => {
              navigation.navigate("Tính Toán");
            }, 1000);
          }}
        />
      </View>
    </>
  );
};

export default WelcomeCal;

const styles = StyleSheet.create({
  header: {
    position: "relative",
    width: "100%",
    height: "12%",
    backgroundColor: "white",
    elevation: 5

  },
  backBtn: {
    position: "absolute",
    bottom: "15%",
    left: "5%",
  },
  text: {
    color: '#ee4d2d',
    fontSize: 20,
  },
  welcomeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTitle: {
    fontSize: 48,
    marginBottom: 12,
    color: "#757575",
    fontWeight: "600",
  },
});
