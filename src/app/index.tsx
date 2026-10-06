import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import * as Clipboard from "expo-clipboard";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";


export default function HomeScreen() {
  const { syssla, datum, tid } = useLocalSearchParams();

  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }, []);

  return (
    <View style={s.root}>
      <Text style={s.title}>Mitt schema </Text>

      {syssla && (
        <View style={s.scheduleCard} >
          <Text style={s.activity}>{syssla}</Text>
          <Text>Datum: {datum}</Text>
          <Text>Tid: {tid}</Text>

          <Pressable onPress={() => {
            Clipboard.setStringAsync(syssla as string);
          }}>
            <Text>Kopiera aktivitet</Text>
          </Pressable>
        </View>
      )}



      <Pressable
        style={s.button}
        onPress={() => {
          router.push("/lagg-till");
        }}>
        <Text>Lägg till Aktivitet</Text>
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
