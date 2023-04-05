import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ProfilePage from "./pages/ProfilePage";
import navigations from "../shared/navigations";
import colors from "../shared/colors";
import * as t from "../core/constants/translations";
import React from "react";

const Tab = createBottomTabNavigator();

const TabRouter = () => {
  const m = t?.default?.bottomTabNavigator;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 14,
          paddingTop: 10,
          height: 70,
          backgroundColor: "#F1F1F1",
          width: "100%",
        },
        tabBarLabel: ({ tintColor, focused, item, ...props }) => {
          return focused ? (
            <Text style={{ fontWeight: "bold", color: colors.PURPLE }}>
              {props?.children}
            </Text>
          ) : (
            <Text style={{ fontWeight: "normal", color: colors.GRAY }}>
              {props?.children}
            </Text>
          );
        },
        tabBarLabelStyle: {
          color: colors.GRAY,
          fontSize: 14,
          alignSelf: "center",
        },
        tabBarIconStyle: {
          color: "red",
          width: 35,
        },
        tabBarInactiveTintColor: colors.GRAY,
        tabBarActiveTintColor: colors.PURPLE,
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name={m?.home}
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={m?.works}
        component={WorksPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="folder-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={m?.profile}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="user" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRouter;
