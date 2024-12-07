import { View, Text, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import MangaLandscapeCard from "@/components/manga-landscape-card";
import { router } from "expo-router";
import { LandscapeCardProps } from "@/constants/models";
import { AntDesign } from "@expo/vector-icons";
import Loading from "@/components/loading";
import { searchManga } from "@/services/api";

const SearchScreen = () => {
  const [search, setSearch] = useState<LandscapeCardProps[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch results only if query is not empty
    const fetchResults = async () => {
      if (query.trim() === "") {
        setSearch([]);
        return;
      }

      setLoading(true);
      try {
        const resultData = await searchManga(query);
        setSearch(resultData);
        console.log("Search results fetched for query:", query);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce to reduce API calls
    const timeoutId = setTimeout(fetchResults, 500); // Adjust debounce delay as needed
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <View className="flex-1 bg-blue-950 pb-24">
      <View className="flex-row justify-evenly px-3 pt-10 items-center">
        <TextInput
          placeholder="Search Your Desired Manga"
          value={query}
          onChangeText={setQuery}
          placeholderTextColor={"#fff"}
          className="flex-1 shadow-lg text-white rounded-md bg-purple-950 px-4 border-blue-900 border-2"
        />
      </View>

      <View className={"h-full w-full"}>
        {query === "" ? (
          <View className="absolute w-full top-72 justify-center items-center gap-y-2">
            <AntDesign name="smileo" size={82} color="white" />
            <Text className="text-white font-bold text-2xl">Hi There!</Text>
            <Text className="text-white tracking-widest">
              Search Your Desired Manga Here!
            </Text>
          </View>
        ) : loading ? (
          <Loading />
        ) : search.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={search}
            className="px-3 mt-3 w-full h-full"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MangaLandscapeCard
                item={item}
                onPress={() => router.push(`/details/${item.id}`)}
              />
            )}
          />
        ) : (
          <View className="absolute w-full top-72 justify-center items-center gap-y-2">
            <AntDesign name="frown" size={82} color="white" className="mb-2" />
            <Text className="text-white font-bold text-xl">
              No Results Found
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
