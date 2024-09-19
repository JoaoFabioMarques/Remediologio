import { View, Text, TextInput, StatusBar, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rajdhani-SemiBold": require("@/assets/fonts/Rajdhani-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    <View className="bg-blue-300 h-full items-center">
      <StatusBar barStyle="dark-content" />
      <View className="mt-16">
        <Text style={styles.rajdhani} className="text-3xl">
          Boas-vindas ao
        </Text>
      </View>
      <View className="flex-row gap-2">
        <Ionicons
          name="alarm-outline"
          size={32}
          color="white"
          className="mt-3"
        />
        <Text style={styles.rajdhani} className="text-3xl mt-4">
          Remédiológio
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rajdhani: {
    fontFamily: "Rajdhani-SemiBold",
    color: "#fff",
  },
});
