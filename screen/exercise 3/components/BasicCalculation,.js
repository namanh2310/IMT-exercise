import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";

const BasicCalculation = () => {
  const [first, setFirst] = React.useState(ope);
  const [second, setSecond] = React.useState();
  const [ope, setOpe] = React.useState();
  const oper = ["+", "-", "*", "/"];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <TextInput
          value={first}
          style={styles.inputTag}
          placeholder="Nhập số a"
          onChangeText={(e) => setFirst(e.replace(/^0+/, ""))}
        />

        <View style={{ fontSize: 48 }}>
          <SelectDropdown
            data={oper}
            onSelect={(selectedItem, index) => setOpe(selectedItem)}
          />
        </View>

        <TextInput
          value={second}
          style={styles.inputTag}
          placeholder="Nhập số b"
          onChangeText={(e) => setSecond(e.replace(/^0+/, ""))}
        />

        <TouchableOpacity
          style={styles.buttonTag}
          onPress={() =>
            navigation.navigate("Kết Quả", {
              result: eval(first + ope + second),
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

export default BasicCalculation;

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
});
