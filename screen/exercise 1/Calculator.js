import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import React from "react";
import Number from "./components/number";
import Other from "./components/other";
import Operation from "./components/operation";
import Result from "./components/result";

export function Calculator() {
  const [result, setResult] = React.useState("");

  const handlePress = (btn) => {
    try {
      setResult(result.toString().concat(btn));
    } catch {
      setResult("Error Action");
    }
  };

  const handleClear = (btn) => {
    setResult("");
  };

  const handleCalculate = () => {
    try {
      result === "Error" ? setResult("") : setResult(eval(result));
    } catch {
      setResult("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <Result result={result} />
      </View>

      <View style={styles.interactArea}>
        <View style={styles.leftArea}>
          <Other handleClear={handleClear} />
          <Number handlePress={handlePress} />
        </View>
        <View style={styles.rightArea}>
          <Operation
            handlePress={handlePress}
            handleCalculate={handleCalculate}
          />
        </View>
      </View>
    </View>
  );
}

// export default Calculator

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },

  resultArea: {
    width: "100%",
    height: "30%",
    backgroundColor: "black",
  },

  interactArea: {
    width: "100%",
    height: "70%",
    backgroundColor: "#ccc",
    display: "flex",
    flexDirection: "row",
  },

  leftArea: {
    width: "75%",
    height: "100%",
  },

  rightArea: {
    width: "25%",
    height: "100%",
  },
});
