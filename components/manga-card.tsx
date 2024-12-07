import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

interface Props {
  onPress: () => void;
  item: {
    id: string;
    title: string;
    status: string;
    thumb: string;
  };
}
const MangaCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity className="relative h-60 w-40 mr-3 shadow-lg" onPress={onPress}>
      <Image
        source={{ uri: item.thumb }}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="h-full w-full absolute rounded-xl"
      />

      <View className="flex-row justify-end pt-3 pr-3">
        <View
          className="rounded-md px-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <Text className="text-white tracking-tighter font-light">
            {item.status}
          </Text>
        </View>
      </View>

      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
        className="absolute bottom-0 w-full"
        style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      >
        <View className="p-3">
          <Text className="text-white shadow-2xl font-bold text-md">
            {item.title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MangaCard;
