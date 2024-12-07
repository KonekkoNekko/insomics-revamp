import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  item: {
    id: string;
    title: string;
    sub_title: string; // Add `sub_title` to match `searchDummy`
    status: string;
    thumb: string;
    summary: string;
    authors: string[];
    genres: string[];
    nsfw: boolean;
    type: string;
    total_chapter: number;
    create_at: number;
    update_at: number;
  };
}
const MangaLandscapeCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="relative h-60 w-100 mb-3 shadow-lg"
      onPress={onPress}
    >
      <Image
        source={{ uri: item.thumb }}
        className="h-full w-full absolute rounded-xl"
      />

      <LinearGradient
        colors={["rgba(23, 37, 84, 0.7)", "rgba(23, 37, 84, 0.9)"]}
        className="absolute w-full h-full flex-1"
        style={{ borderRadius: 10 }}
      />

      <View className="absolute items-center px-4 py-6 h-full w-full">
        <View className="flex-row h-full w-full items-center justify-around gap-x-2.5">
          <View className="flex-1 gap-y-1">
            <View className="flex-row items-center">
              <View className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
              <Text className="text-white text-sm tracking-wide shadow-xl">
                {item.status.toUpperCase()}: {item.total_chapter} Chapter
              </Text>
            </View>
            <Text className="text-white font-bold text-lg">{item.title}</Text>
            <Text className="text-white text-sm tracking-wider">
              {item.genres.map((genre, idx) =>
                idx === item.genres.length - 1 ? genre : `${genre} • `
              )}
            </Text>
            <Text className="text-white text-sm">
              {item.authors.map((author, idx) =>
                idx === 0 ? author : `, ${author}`
              )}
            </Text>
          </View>
          <Image
            source={{ uri: item.thumb }}
            className="h-40 w-28 rounded-lg shadow-xl"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MangaLandscapeCard;
