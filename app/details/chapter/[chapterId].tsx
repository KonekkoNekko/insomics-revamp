import { View, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { fetchChapterImages } from "@/services/api";
import { Ionicons } from "@expo/vector-icons";
import Loading from "@/components/loading";
import { ChapterImagesProps } from "@/constants/models";
import FullWidthImage from "react-native-fullwidth-image";

const ChapterDetails = () => {
  const { chapterId } = useLocalSearchParams();
  const [chapterImages, setChapterImages] = useState<ChapterImagesProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(chapterId: string) {
    const dataChapterImages = await fetchChapterImages(chapterId);
    setChapterImages(dataChapterImages);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData(chapterId.toString());
  }, []);

  return (
    <View className="relative flex-1 bg-blue-950">
      <View className="absolute top-0 left-0 z-10 p-3">
        <TouchableOpacity
          className="p-2 rounded-full"
          style={{ backgroundColor: "rgba(23, 37, 84, 0.7)" }}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading height="h-full" />
      ) : (
        <FlatList
          data={chapterImages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FullWidthImage
              source={{ uri: item.link }}
              style={{ resizeMode: "cover" }}
            />
          )}
        />
      )}
    </View>
  );
};

export default ChapterDetails;
