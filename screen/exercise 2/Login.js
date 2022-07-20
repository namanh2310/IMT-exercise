import {
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/ocean-wave-14582420.jpg",
          }}
          style={[styles.imgType1, { borderBottomRightRadius: 8 }]}
        />

        <Image
          source={{
            uri: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/283352855_335076885508003_625670620351695113_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7604QjYQVSsAX9KCuQe&_nc_oc=AQk-PI-bOHq7YQrRsEse904g00BQOZzIy_Sd-W5o45e6SAU4UaOfzvAy4nWVQkg0DDg&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVIc9pY264GvfTsbSKmKq8m5_e5OeclmT-XZeDmQHde4qw&oe=62F7ABF5",
          }}
          style={[
            styles.imgType2,
            { borderBottomRightRadius: 8, borderTopRightRadius: 8 },
          ]}
        />

        <Image
          source={{
            uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/291881282_509517730930666_1390285678332302369_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=h_UHQOa6ewQAX_qGM32&_nc_ht=scontent.fsgn2-3.fna&oh=03_AVKxIvEIkZWmOaWe3ziMoVmD0d2Yv_ZuuzThJmuhSmrlhw&oe=62F7E476",
          }}
          style={[
            styles.imgType1,
            { borderBottomRightRadius: 8, borderTopRightRadius: 8 },
          ]}
        />
      </View>

      <View style={styles.col2}>
        <Image
          source={{
            uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/285669927_1078811686405635_8431319783127514954_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EbqX3jN7Z2YAX9vmT-7&_nc_ht=scontent.fsgn2-3.fna&oh=03_AVLCIKYcSw3GrFkKlZuoO9ivL1xUCndCn4rue61nUOV5Aw&oe=62F78D74",
          }}
          style={[
            styles.imgType3,
            { borderBottomRightRadius: 8, borderBottomLeftRadius: 8 },
          ]}
        />

        <Image
          source={{
            uri: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/287394808_1102217563984427_4287598482363265328_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=CDM3q8AiJ2oAX8y2lMt&_nc_ht=scontent.fsgn2-4.fna&oh=03_AVKtTqC-1diLFkq5GrNIJNxLRx-lP0TFhxmDmkMt5lOBYQ&oe=62F65D74",
          }}
          style={[styles.imgType3, { borderRadius: 8 }]}
        />
      </View>

      <View style={styles.col3}>
        <Image
          source={{
            uri: "https://cdn.britannica.com/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg",
          }}
          style={[
            styles.imgType1,
            { borderBottomRightRadius: 8, borderBottomLeftRadius: 8 },
          ]}
        />

        <Image
          source={{
            uri: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/287368448_357297963222720_5325530023200135017_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YAM28BDnKIMAX_w0wkq&tn=dTrhZWwFWP7D9_WM&_nc_ht=scontent.fsgn2-6.fna&oh=03_AVIT-CDxRvlxjPh5H2azSbm4Z1undeR299RWeOWSMuOzMQ&oe=62F688D9",
          }}
          style={[styles.imgType4, { borderRadius: 8 }]}
        />
      </View>

      <View style={styles.loginArea}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
          />

          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={{ color: "white" }}>SIGN-IN</Text>
            </View>
          </TouchableOpacity>

          <Text style={{ textAlign: "center", color: "#3366FF" }}>
            Forgot Password?
          </Text>
        </View>
      </View>

      <View style={styles.copyRight}>
        <Text style={{ textAlign: "center" }}>Ⓒ PIA 2.5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },

  col1: {
    width: "30%",
    height: "75%",
    marginRight: 8,
  },

  col2: {
    width: "40%",
    height: "80%",
    marginRight: 8,
  },

  col3: {
    width: "40%",
    height: "80%",
    marginRight: 8,
  },

  imgType1: {
    width: "100%",
    height: "30%",
    marginBottom: 8,
    marginRight: 8,
  },

  imgType2: {
    width: "100%",
    height: "40%",
    marginBottom: 8,
    marginRight: 8,
  },

  imgType3: {
    width: "100%",
    height: "50%",
    marginBottom: 8,
    marginRight: 8,
  },

  imgType4: {
    width: "100%",
    height: "70%",
    marginBottom: 8,
    marginRight: 8,
  },

  loginArea: {
    position: "absolute",
    width: "80%",
    bottom: "12%",
    left: "10%",
  },

  input: {
    height: "28%",
    width: "100%",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#DCE2EC",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
  },

  button: {
    height: "28%",
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#3366FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  copyRight: {
    position: "absolute",
    bottom: "2%",
    width: "100%",
  },
});
