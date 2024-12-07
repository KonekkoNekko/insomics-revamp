import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import colors from "tailwindcss/colors";

interface Props {
  height?: string
}
const Loading = ({height}: Props) => {
  return (
    <View className={`flex-1 items-center justify-center ${height}`}>
      <ActivityIndicator color={colors.white} />
    </View>
  );
};

export default Loading;
