import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export function ReadNews() {
  const route = useRoute();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Image
        style={styles.img}
        source={{
          uri: route.params.image,
        }}
      />
      <Text style={styles.desc}>{route.params.description}</Text>
    </ScrollView>
  );
}

// export default Hello;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "5%",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  img: {
    width: "100%",
    height: 280,
    marginTop: "5%",
  },
  desc: {
    fontSize: 20,
    fontWeight: "100",
  },
});
