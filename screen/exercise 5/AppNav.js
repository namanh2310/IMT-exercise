import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import Announc from "./screen/Announc";
import Noti from "./screen/Noti";
import Members from "./screen/Members";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faBullhorn,
  faBell,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { ReadNews } from "./screen/ReadNews";

const Tab = createBottomTabNavigator();

export function AppNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: '10%'
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.controllerBtn}>
              <FontAwesomeIcon
                icon={faHouse}
                color={focused ? "rgba(34,115,254,255)" : "#737373"}
                size={24}
              />
              <Text
                style={
                  focused ? styles.controllerTextActive : styles.controllerText
                }
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Announcments"
        component={Announc}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.controllerBtn}>
              <FontAwesomeIcon
                icon={faBullhorn}
                color={focused ? "rgba(34,115,254,255)" : "#737373"}
                size={24}
              />
              <Text
                style={
                  focused ? styles.controllerTextActive : styles.controllerText
                }
              >
                Announcments
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Noti}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.controllerBtn}>
              <FontAwesomeIcon
                icon={faBell}
                color={focused ? "rgba(34,115,254,255)" : "#737373"}
                size={24}
              />
              <Text
                style={
                  focused ? styles.controllerTextActive : styles.controllerText
                }
              >
                Notifications
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Members"
        component={Members}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.controllerBtn}>
              <FontAwesomeIcon
                icon={faUserGroup}
                color={focused ? "rgba(34,115,254,255)" : "#737373"}
                size={24}
              />
              <Text
                style={
                  focused ? styles.controllerTextActive : styles.controllerText
                }
              >
                Members
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ReadNews"
        component={ReadNews}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

// export default TabNavigator;

const styles = StyleSheet.create({
  controllerBtn: {
    display: "flex",
    alignItems: "center",
  },

  controllerText: {
    fontSize: 10,
    color: "#737373",
    marginTop: 4,
  },

  controllerTextActive: {
    fontSize: 10,
    color: "rgba(34,115,254,255)",
    marginTop: 4,
  },
});
