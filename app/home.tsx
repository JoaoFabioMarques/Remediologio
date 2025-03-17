import { useState } from "react";
import { View, Image, Text, TextInput, StatusBar, StyleSheet,} from "react-native";
import { Link, Redirect } from "expo-router";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";

export default function Home() {
  const [fontsLoaded] = useFonts({
    "Rajdhani-SemiBold": require("@/assets/fonts/Rajdhani-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    <View className="flex bg-blue-300">
      <StatusBar barStyle="dark-content" />
      <View className="">
        <View className="mt-10 flex-row gap-2 items-center justify-center">
          <Ionicons
            name="alarm-outline"
            size={32}
            color="black"
            className="mt-2"
          />
          <Text style={styles.rajdhani} className="text-3xl mt-4">
            Remédiológio
          </Text>
        </View>
        <View className="mt-6 items-center justify-center">
          <Text style={styles.rajdhani} className="text-3xl">
            Olá!
          </Text>
          <TextInput />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rajdhani: {
    fontFamily: "Rajdhani-SemiBold",
    color: "#000000",
  },
});
