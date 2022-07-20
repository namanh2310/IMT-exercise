import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import { Calculator } from "./screen/exercise 1/Calculator";
import { Login } from "./screen/exercise 2/Login";
import { CalculatorNav } from "./screen/exercise 3/CalculatorNav";
import { User } from "./screen/exercise 4/User";
import { AppNav } from "./screen/exercise 5/AppNav";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Exercise 1" component={Calculator} />
        <Stack.Screen name="Exercise 2" component={Login} />
        <Stack.Screen name="Exercise 3" component={CalculatorNav} options={{headerShown: false}}/>
        <Stack.Screen name="Exercise 4" component={User} />
        <Stack.Screen name="Exercise 5" component={AppNav} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
