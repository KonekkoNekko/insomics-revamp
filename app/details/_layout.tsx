import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DetailLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="chapter/[chapterId]"
      />
      <Stack.Screen
        name="[mangaId]"
      />
    </Stack>
  );
};

export default DetailLayout;
