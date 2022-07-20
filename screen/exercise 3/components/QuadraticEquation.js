import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const QuadraticEquation = () => {
  const [first, setFirst] = React.useState();
  const [second, setSecond] = React.useState();
  const [third, setThird] = React.useState();

  const navigation = useNavigation();

  function handleQuadratic() {
    const discriminant = second * second - 4 * first * third;
    let rootA;
    let rootB;
    if (discriminant > 0) {
      rootA = (-second + Math.sqrt(discriminant)) / (2 * first);
      rootB = (-second - Math.sqrt(discriminant)) / (2 * first);
    } else if (discriminant == 0) {
      rootA = -second / (2 * first);
      rootB = -second / (2 * first);
    } else {
      let realPart = (parseFloat(-second) / (2 * parseFloat(first))).toFixed(2);
      let imagPart = (
        Math.sqrt(-discriminant) /
        (2 * parseFloat(first))
      ).toFixed(2);
      rootA = realPart + "+" + imagPart + "i";
      rootB = realPart + "-" + imagPart + "i";
    }
    return (
      <View>
        <Text>{rootA}</Text>
        <Text>{rootB}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <TextInput
          value={first}
          style={styles.inputTag}
          placeholder="Nhập số a"
          onChangeText={(e) => setFirst(e.replace(/^0+/, ""))}
        />

        <TextInput
          value={second}
          style={styles.inputTag}
          placeholder="Nhập số b"
          onChangeText={(e) => setSecond(e.replace(/^0+/, ""))}
        />

        <TextInput
          value={third}
          style={styles.inputTag}
          placeholder="Nhập số c"
          onChangeText={(e) => setThird(e.replace(/^0+/, ""))}
        />

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() =>
            navigation.navigate("Kết Quả", {
              result: handleQuadratic(),
            })
          }
        >
          <View>
            <Text style={styles.text}>Tính</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuadraticEquation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 100,
  },
  textArea: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  inputTag: {
    width: "80%",
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2196F3",
    paddingLeft: 5,
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
