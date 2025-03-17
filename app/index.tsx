import { View, Text, TextInput, StatusBar, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export function RedirecionarEntrar(){
  return(
    router.navigate("../home")
  );
}

export function RedirecionarCadastro(){
  return(
    router.navigate("../cadastro")
  );
}

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
          color="black"
          className="mt-3"
        />
        <Text style={styles.rajdhani} className="text-3xl mt-4">
          Remédiológio
        </Text>
      </View>
      <View className="mt-16 gap-10 w-[50%]">
        <TextInput placeholder="Usuário" className="border border-white bg-white text-black rounded-2xl"/>
        <TextInput placeholder="Senha" className="border border-white bg-white text-black rounded-2xl"/>
        <View className="w-[50%] mt-4 flex justify-between flex-row gap-12 rounded-2xl text-black">
          <Button title="Entrar" onPress={RedirecionarEntrar}/>
          <Button title="Cadastrar"/>
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
