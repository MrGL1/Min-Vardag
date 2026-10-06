import { View, Text, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { syssla, datum, tid } = useLocalSearchParams();

  return (
    <View>
      <Text>Min Vardag </Text>
      <Text>{syssla}</Text>
      <Text>{datum}</Text>
      <Text>{tid}</Text>

      <Pressable onPress={() => {
        router.push("/sysslor");
      }}>

        <Text> Sysslor </Text>
      </Pressable>

      <Pressable onPress={() => {
        router.push("/lagg-till");
      }}>
        <Text>Lägg till syssla</Text>
      </Pressable>
    </View>
  );
}
