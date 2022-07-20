import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeCal from "./components/WelcomeCal";
import HomeScreen from "./components/HomeScreen";
import BasicCalculation from "./components/BasicCalculation,";
import SimpleEquation from "./components/SimpleEquation";
import QuadraticEquation from "./components/QuadraticEquation";

function ResultScreen() {
  const route = useRoute();

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{route.params.result}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export function CalculatorNav() {
  return (
    <Stack.Navigator initialRouteName="WelcomeCal">
      <Stack.Screen
        name="Chào Mừng"
        component={WelcomeCal}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tính Toán" component={HomeScreen} />
      <Stack.Screen name="Cộng Trừ Nhân Chia" component={BasicCalculation} />
      <Stack.Screen name="Phương Trình Bậc 1" component={SimpleEquation} />
      <Stack.Screen name="Phương Trình Bậc 2" component={QuadraticEquation} />
      <Stack.Screen name="Kết Quả" component={ResultScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: {
    fontSize: 64,
    fontWeight: "600",
  },
});
