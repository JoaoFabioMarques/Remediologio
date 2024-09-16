import { useState } from "react";
import { View, Image, Text, TextInput, StatusBar, StyleSheet } from "react-native";
import { Link, Redirect } from "expo-router";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  const [fontsLoaded] = useFonts({
    "Rajdhani-SemiBold": require("@/assets/fonts/Rajdhani-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    <View className="flex bg-white text-black">
      <StatusBar barStyle="dark-content" />
      <View className="items-center">
        <View className="mt-12 items-center justify-center">
          <Image
            source={require("@/assets/images/icons8-alarm-clock-glyph-neue-32.png")}
          />
          <Text style={styles.rajdhani} className="text-3xl">
            Remédiológio
          </Text>
        </View>
        <View className="mt-6">
          <Text style={styles.rajdhani} className="text-3xl">
            Olá!
          </Text>
          <TextInput/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rajdhani: {
    fontFamily: "Rajdhani-SemiBold",
  },
});


