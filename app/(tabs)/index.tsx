import Loading from "@/components/loading";
import MangaCard from "@/components/manga-card";
import {
  chillAndRelaxingReads,
  emotionalAndDeepStoriesReads,
  fantasticalAdventuresReads,
  motivationalAndInspiringReads,
  thrillingAndMysteriousReads,
} from "@/constants";
import { fetchLatest, fetchManga, fetchMangaWithGenres } from "@/services/api";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ItemProps {
  item: {
    id: string;
    title: string;
    status: string;
    thumb: string;
  };
}

export default function HomeScreen() {
  const [all, setAll] = useState([]);
  const [popular, setPopular] = useState([]);
  const [relax, setRelax] = useState([]);
  const [motivational, setMotivational] = useState([]);
  const [thrill, setThrill] = useState([]);
  const [emotional, setEmotional] = useState([]);
  const [fantastical, setFantastical] = useState([]);

  async function fetchData() {
    const dataAll = await fetchManga();
    setAll(dataAll);
    if (dataAll.length != 0) console.log("dataAll successfully fetched");

    const dataPopular = await fetchLatest();
    setPopular(dataPopular);
    if (dataPopular.length != 0)
      console.log("dataPopular successfully fetched");

    const dataRelax = await fetchMangaWithGenres(chillAndRelaxingReads);
    setRelax(dataRelax);
    if (dataRelax.length != 0) console.log("dataRelax successfully fetched");

    const dataMotivational = await fetchMangaWithGenres(
      motivationalAndInspiringReads
    );
    setMotivational(dataMotivational);
    if (dataMotivational.length != 0)
      console.log("dataMotivational successfully fetched");

    const dataThrill = await fetchMangaWithGenres(thrillingAndMysteriousReads);
    setThrill(dataThrill);
    if (dataThrill.length != 0) console.log("dataThrill successfully fetched");

    const dataEmotional = await fetchMangaWithGenres(
      emotionalAndDeepStoriesReads
    );
    setEmotional(dataEmotional);
    if (dataEmotional.length != 0)
      console.log("dataEmotional successfully fetched");

    const dataFantastical = await fetchMangaWithGenres(
      fantasticalAdventuresReads
    );
    setFantastical(dataFantastical);
    if (dataFantastical.length != 0)
      console.log("dataFantastical successfully fetched");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="flex-1 bg-blue-950">
      <StatusBar barStyle="light-content" />

      <View className="flex-row justify-between px-3 pt-4 items-center">
        <View className="flex-column">
          <Text className="text-white font-semibold text-3xl">
            Welcome to Insomics
          </Text>
          <Text className="text-white font-light text-base tracking-tighter">
            Your perfect manga companion to enjoy your night 🌙
          </Text>
        </View>
        <View className="flex-column">
          <TouchableOpacity className="flex-column items-center gap-y-2">
            <Ionicons name="bookmarks" size={24} color="white" />
            <Text className="text-white text-xs font-extralight tracking-tighter">
              Favorites
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {all.length > 0 ||
      popular.length > 0 ||
      relax.length > 0 ||
      motivational.length > 0 ||
      thrill.length > 0 ||
      emotional.length > 0 ||
      fantastical.length > 0 ? (
        <ScrollView>
          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Explore All Comics 🗂️
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Browse our wide selection of manga and find your favorite
                stories.
              </Text>
            </View>
            {all.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={all}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>

          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Trending Now 🌟
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Check out the most-loved comics everyone’s enjoying—perfect to
                add some excitement to your night!
              </Text>
            </View>
            {popular.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={popular}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>

          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Relaxing Reads 🛋️🌸
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Unwind and recharge with light-hearted and heartwarming stories.
              </Text>
            </View>
            {relax.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={relax}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>

          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Motivational and Inspiring 🏆🔥
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Find action-packed adventures and uplifting tales that energize
                your spirit.
              </Text>
            </View>
            {motivational.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={motivational}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>

          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Thrilling and Mysterious 🕵️‍♂️🖤
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Indulge in suspenseful stories full of mystery and intrigue.
              </Text>
            </View>
            {thrill.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={thrill}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>

          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Emotional and Deep Stories 🎭💔
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Immerse yourself in heartfelt tales and explore deep, dramatic
                narratives.
              </Text>
            </View>
            {emotional.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={emotional}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>

          <View className="py-5">
            <View className="mx-3 flex-column">
              <Text className="text-white font-semibold text-2xl">
                Fantastical Adventures ✨🌌
              </Text>
              <Text className="text-white font-light text-base tracking-tight">
                Escape to otherworldly realms and embark on extraordinary
                journeys.
              </Text>
            </View>
            {fantastical.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={fantastical}
                className="px-3 mt-3 h-60"
                keyExtractor={(item) => item.id}
                renderItem={({ item }: ItemProps) => (
                  <MangaCard
                    item={item}
                    onPress={() => router.push(`/details/${item.id}`)}
                  />
                )}
              />
            ) : (
              <Loading height="h-60" />
            )}
          </View>
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  );
}
