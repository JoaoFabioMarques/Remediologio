import { useState } from "react";
import { View, Image, Text, StatusBar, StyleSheet } from "react-native";
import { Link, Redirect } from "expo-router";
import { useFonts } from "expo-font";

export default function Home() {
  const [fontsLoaded] = useFonts({
    "Rajdhani-SemiBold": require("@/assets/fonts/Rajdhani-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    <View className="flex-1 bg-white text-black">
      <StatusBar hidden />
      <View className="items-center">
        <View className="flex-row items-center justify-center">
          <Image
            source={require("@/assets/images/icons8-alarm-clock-glyph-neue-32.png")}
          />
          <Text style={styles.rajdhani}>Remédiológio</Text>
        </View>
        <Text style={styles.rajdhani}>Olá, </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rajdhani: {
    fontFamily: "Rajdhani-SemiBold",
  },
});
