import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { syssla, datum, tid } = useLocalSearchParams();

  return (
    <View style={s.root}>
      <Text style={s.title}>Min Vardag </Text>

      {syssla && (
        <View style={s.scheduleCard} >
          <Text style={s.activity}>{syssla}</Text>
          <Text>Datum: {datum}</Text>
          <Text>Tid: {tid}</Text>
        </View>
      )}

      <Pressable
        style={s.button}
        onPress={() => {
          router.push("/sysslor");
        }}>

        <Text> Sysslor </Text>
      </Pressable>

      <Pressable
        style={s.button}
        onPress={() => {
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

  scheduleCard: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },

  activity: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },

})
