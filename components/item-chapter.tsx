import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ItemChaptersProps } from "@/constants/models";

interface Props {
  onPress: () => void;
  item: ItemChaptersProps;
}
const ItemChapter = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="flex-1 mb-3 p-2 w-full shadow-lg bg-blue-800 rounded-md
    "
      onPress={onPress}
    >
      <Text className="text-white tracking-tighter font-light text-2xl">
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemChapter;
