import * as React from "react";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  StyleSheet,
} from "react-native";

export function User() {
  const [user, setUser] = React.useState({ uname: "", uemail: "" });
  const [users, setUsers] = React.useState([]);
  const [isFocus, setIsFocus] = React.useState(false);
  const [updateId, setUpdateId] = React.useState("for adding");

  const handleAdd = (e) => {
    if (user.uname !== undefined && user.uemail !== undefined) {
      setUsers([...users, { name: user.uname, email: user.uemail }]);
    }
    setUser({});
  };

  const handleClear = () => {
    setUpdateId("for adding");
    setUsers([]);
    setIsFocus();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user !== users[id]));
    setUpdateId("for adding");
  };

  const handleReset = (id) => {
    setIsFocus(id);
    setUser({ uname: users[id].name, uemail: users[id].email });
    setUpdateId(id);
  };

  const handleUpdate = (id, handleDelete) => {
    const newList = users;
    newList[id].name = user.uname;
    newList[id].email = user.uemail;

    setUsers([...users, { newList }]);
    setUpdateId("for adding");
    setUser({});
    setIsFocus();
    setUsers(users);
  };

  return (
    <View style={styles.container}>
      <View style={styles.interactArea}>
        <TextInput
          style={styles.inputTag}
          placeholder="Nhập tên..."
          value={user.uname}
          onChangeText={(e) => {
            setUser({ ...user, uname: e });
          }}
        />

        <TextInput
          style={styles.inputTag}
          placeholder="Nhập email..."
          value={user.uemail}
          onChangeText={(e) => {
            setUser({ ...user, uemail: e });
          }}
        />

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.btnText}>Làm Mới</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              updateId == "for adding"
                ? handleAdd
                : () => handleUpdate(updateId, handleDelete)
            }
            style={styles.button}
          >
            <Text style={styles.btnText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>

      {users.map((user, index) => (
        <View key={index} style={styles.displayArea}>
          <View
            key={index}
            style={isFocus === index ? styles.active : styles.userBox}
          >
            <View style={styles.userText}>
              <Text style={{ marginBottom: 6 }}>{user.name}</Text>
              <Text>{user.email}</Text>
            </View>

            <View style={styles.userBtn}>
              <TouchableOpacity
                style={{
                  marginBottom: 6,
                  borderWidth: 2,
                  paddingRight: 12,
                  paddingLeft: 12,
                  borderColor: "#0091ea",
                }}
                onPress={() => handleReset(index)}
              >
                <Text>Sửa</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  padding: 2,
                  paddingRight: 12,
                  paddingLeft: 12,
                  borderColor: "#0091ea",
                }}
                onPress={() => handleDelete(index)}
              >
                <Text>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#0091ea",
    marginTop: "15%",
    marginLeft: 20,
    marginRight: 20,
  },

  interactArea: {
    width: "95%",
    margin: 16,
  },

  inputTag: {
    padding: 8,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: "#0091ea",
  },

  buttonArea: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    borderWidth: 3,
    borderColor: "#0091ea",
    minWidth: 120,
    padding: 4,
  },

  btnText: {
    margin: "auto",
    fontSize: 16,
    textAlign: "center",
  },

  displayArea: {
    width: "100%",
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 8,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
  },

  userBox: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#0091ea",
    paddingTop: 12,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  active: {
    width: "100%",
    borderWidth: 3,
    borderColor: "red",
    paddingTop: 12,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userText: {
    display: "flex",
    marginLeft: 16,
    justifyContent: "space-between",
  },

  userBtn: {
    display: "flex",
    marginRight: 16,
  },
});
