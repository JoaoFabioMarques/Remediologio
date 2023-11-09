import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';

export default function Page() {

  const [fontsLoaded] = useFonts({
    'Rajdhani': require('./fonts/Rajdhani-Bold.ttf'),
  });
  
  if(!fontsLoaded){
    return null;
  };

  return (
    
      <View style={styles.main}>
        <Image source={require('./images/icons8-alarm-clock-glyph-neue-32.png')}></Image>
        <Text style={styles.title}>Remédiológio</Text>
        <Text style={styles.welcome}>Olá, </Text>
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.2,
    backgroundColor: '#87cef4',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: 'Rajdhani',
    fontSize: 28,
  },
  welcome: {
    fontFamily: 'Rajdhani',
    fontSize: 20,
  },
});
