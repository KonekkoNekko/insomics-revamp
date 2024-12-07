import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { fetchChapters, getManga } from "@/services/api";
import {
  ItemChaptersProps,
  LandscapeCardProps,
  MangaDetailProps,
} from "@/constants/models";
import Loading from "@/components/loading";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ItemChapter from "@/components/item-chapter";
import MangaLandscapeCard from "@/components/manga-landscape-card";

const MangaDetails = () => {
  const { mangaId } = useLocalSearchParams();
  const [mangaDetail, setMangaDetail] = useState<MangaDetailProps>();
  const [chapters, setChapters] = useState<ItemChaptersProps[]>([]);

  async function fetchData(mangaId: string) {
    const dataDetail = await getManga(mangaId);
    setMangaDetail(dataDetail);
    console.log("dataDetail successfully fetched: ");

    const dataChapters = await fetchChapters(mangaId);
    setChapters(dataChapters);
    console.log("dataChapters successfully fetched: ");
  }

  useEffect(() => {
    fetchData(mangaId.toString());
  }, []);

  // const mangaDummy = {
  //   id: "65b72acabf13b1bd72ceedd3",
  //   title: "The king of cave will live a paradise life",
  //   sub_title:
  //     "Doukutsu Ou kara Hajimeru Rakuen Life ; Doukutsuou kara Hajimeru Rakuen Life ; Doukutsuou kara Hajimeru Rakuen Life ~Bannou no Saikutsu Skill de Saikyou Ni ; The Cave King Will Live a Paradise Life -Becoming the Strongest With the Mining Skill?- ; The King of Cave Will Live a Paradise Life ; 洞窟王からはじめる楽園ライフ ; 洞窟王からはじめる楽園ライフ ～万能の採掘スキルで最強に!?～",
  //   status: "ongoing",
  //   thumb:
  //     "https://usc1.contabostorage.com/scraper/mangas/65b72acabf13b1bd72ceedd3/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20241204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241204T175145Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2e61f2c10169009baf255548f0867f6f4da843893d38d50939e0d8021318a55e",
  //   summary:
  //     "Hiel was ridiculed for having a useless crest and was exiled to a remote island. When he grabbed an ice axe to reclaim the island, the true effect of his crest was revealed. With his production cheat he will reclaim this uninhabited island and start his life in paradise.",
  //   authors: ["Touya", "Aobe Mahito", "Naehara Hajime", "Demise Takao"],
  //   genres: ["Drama", "Fantasy"],
  //   nsfw: false,
  //   type: "japan",
  //   total_chapter: 73,
  //   create_at: 1706502858879,
  //   update_at: 1733236023624,
  // };

  // const chaptersDummy = [
  //   {
  //     id: "674f1537a878ada1ceacb25c",
  //     manga: "65b72acabf13b1bd72ceedd3",
  //     title: "Chapter 34.2",
  //     create_at: 1733236023618,
  //     update_at: 1733236023618,
  //   },
  //   {
  //     id: "6739dffea878ada1ceaca981",
  //     manga: "65b72acabf13b1bd72ceedd3",
  //     title: "Chapter 34.1",
  //     create_at: 1731846142088,
  //     update_at: 1731846142088,
  //   },
  //   {
  //     id: "671f7976a878ada1ceaca22c",
  //     manga: "65b72acabf13b1bd72ceedd3",
  //     title: "Chapter 33.2",
  //     create_at: 1730115958843,
  //     update_at: 1730115958843,
  //   },
  // ];

  // useEffect(() => {
  //   setMangaDetail(mangaDummy);
  //   setChapters(chaptersDummy);
  //   setSearch(searchDummy);
  // }, []);

  return (
    <View className="flex-1 bg-blue-950">
      {mangaDetail != undefined && chapters.length != 0 ? (
        <ScrollView className="flex-column">
          <View className="relative h-[500px] w-full shadow-lg">
            <Image
              source={{ uri: mangaDetail.thumb }}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              className="h-full w-full absolute"
            />

            <LinearGradient
              colors={["rgba(23, 37, 84, 0.7)", "rgba(23, 37, 84, 1)"]}
              className="absolute w-full h-full flex-1"
            />

            <View className="absolute top-24 px-4 py-6 space-y-3">
              <View className="flex-row">
                <View className="items-center">
                  <Image
                    source={{ uri: mangaDetail.thumb }}
                    className="h-60 w-40 rounded-lg shadow-md"
                  />
                </View>
                <View className="flex-1 mx-2 gap-y-2">
                  <View className="flex-row items-center">
                    <View className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
                    <Text className="text-white text-sm tracking-wide">
                      {mangaDetail.status.toUpperCase()}:{" "}
                      {mangaDetail.total_chapter} Chapter
                    </Text>
                  </View>
                  <Text className="text-white font-bold text-xl">
                    {mangaDetail.title}
                  </Text>
                  <Text className="text-white text-sm tracking-wide">
                    {mangaDetail.genres.map((genre, idx) =>
                      idx === mangaDetail.genres.length - 1
                        ? genre
                        : `${genre} • `
                    )}
                  </Text>
                  <Text className="text-white text-sm">
                    {mangaDetail.authors.map((author, idx) =>
                      idx === 0 ? author : `, ${author}`
                    )}
                  </Text>
                  <TouchableOpacity
                    className="flex-row justify-center items-center py-2 rounded-md bg-blue-900 mt-2"
                    onPress={() => {}}
                  >
                    <Ionicons name="bookmark" size={16} color="white" />
                    <Text className="text-white ml-2 text-sm">
                      Add to Favorites
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text className="text-white text-justify tracking-wide items-center mt-3">
                {mangaDetail.summary.length > 500
                  ? mangaDetail.summary.slice(0, 500) + "..."
                  : mangaDetail.summary}
              </Text>
            </View>

            <View className="absolute top-4 left-4">
              <TouchableOpacity
                className="p-2 rounded-full"
                style={{ backgroundColor: "rgba(23, 37, 84, 0.7)" }}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-column gap-y-2 px-3">
            <Text className="text-white text-justify font-medium italic text-2xl mb-2">
              Chapter List
            </Text>

            <FlatList
              scrollEnabled={false}
              data={chapters}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ItemChapter
                  item={item}
                  onPress={() => router.push(`/details/chapter/${item.id}`)}
                />
              )}
            />
          </View>
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default MangaDetails;
