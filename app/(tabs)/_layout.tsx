import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ADDBFF",
        tabBarInactiveTintColor: "#0284C7",
        tabBarActiveBackgroundColor: "#005DB2",
        tabBarInactiveBackgroundColor: "#005DB2",
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: "transparent",
          justifyContent: "center",
          alignContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
            tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
            tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="information"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
