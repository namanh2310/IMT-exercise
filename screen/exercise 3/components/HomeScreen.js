import { Button, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() => navigation.navigate("Cộng Trừ Nhân Chia")}
        >
          <View>
            <Text style={styles.text}>CỘNG TRỪ NHÂN CHIA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() => navigation.navigate("Phương Trình Bậc 1")}
        >
          <View>
            <Text style={styles.text}>PHƯƠNG TRÌNH BẬC 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() => navigation.navigate("Phương Trình Bậc 2")}
        >
          <View>
            <Text style={styles.text}>PHƯƠNG TRÌNH BẬC 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 100,
  },
  buttonArea: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonTag: {
    width: "80%",
    height: 50,
    backgroundColor: "#2196F3",
    borderRadius: 16,
    border: "2px #2196F3 solid",
  },
  text: {
    margin: "auto",
    lineHeight: 50,
    color: "black",
    fontWeight: "600",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
