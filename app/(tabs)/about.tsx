import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AboutScreen = () => {
  return (
    <View className="flex-1 bg-blue-950 items-center justify-center">
      <View className="flex-col m-10 p-5 bg-purple-900 gap-y-2 rounded-2xl shadow-xl">
        <Text className="text-white text-2xl font-bold tracking-widest text-center">
          About INSOMICS
        </Text>
        <Text className="text-white text-xl font-medium tracking-wide">
          INSOMICS is a manga reading application designed for nighttime use.
        </Text>
        <Text className="text-white text-base tracking-wide">
          This project is a revamped version of a major assignment for the
          Mobile Application Development course using React Native. Enhanced
          with React Native 0.76.3 and Expo 52.0.11, styled with NativeWind
          4.1.23, and API calls handled using axios 1.7.8, it was finalized on
          December 6, 2024. Upcoming features: integration of AsyncStorage to
          save reading history and favorite reads.
        </Text>
        <View className="flex-col gap-y-3 mt-5 items-center">
          <Text className="text-white text-sm">Developed by:</Text>
          <View className="flex-row gap-x-4 items-center">
            <Image
              source={require("@/assets/konekko.png")}
              className="h-14 w-14 rounded-full"
            />
            <View className="flex-col gap-y-1">
              <Text className="text-white text-sm font-bold">
                M. Nabiel Setiawan
              </Text>
              <View className="flex-row gap-x-1">
                <AntDesign name="github" size={15} color="white" />
                <Text className="text-white text-sm">@KonekkoNekko</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
