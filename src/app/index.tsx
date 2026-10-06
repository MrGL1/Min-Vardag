import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { syssla, datum, tid } = useLocalSearchParams();

  return (
    <View style={s.root}>
      <Text style={s.title}>Min Vardag </Text>
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

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

})
