import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

type Aktivitet = {
  aktivitet: string;
  datum: string;
  tid: string;
};

export default function HomeScreen() {
  const [aktiviteter, setAktiviteter] = useState<Aktivitet[]>([]);

  const hamtaAktiviteter = async () => {
    const sparade = await AsyncStorage.getItem("aktiviteter");
    if (sparade) {
      setAktiviteter(JSON.parse(sparade));
    }
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
    hamtaAktiviteter();
  }, []);



  return (
    <View style={s.root}>

      <Text style={s.title}>Mitt schema </Text>

      {aktiviteter.map((item, index) => (
        <View key={index} style={s.scheduleCard} >
          <Text style={s.activity}>{item.aktivitet}</Text>
          <Text>Datum: {item.datum}</Text>
          <Text>Tid: {item.tid}</Text>

          <Pressable onPress={() => {
            Clipboard.setStringAsync(item.aktivitet);
          }}>
            <Text>Kopiera aktivitet</Text>
          </Pressable>


          <Pressable onPress={async () => {
            const nyaAktiviteter = aktiviteter.filter((_, i) => i !== index);

            setAktiviteter(nyaAktiviteter);

            await AsyncStorage.setItem(
              "aktiviteter",
              JSON.stringify(nyaAktiviteter)
            );
          }}>
            <Text>Ta bort</Text>
          </Pressable>
        </View>
      ))}



      < Pressable
        style={s.button}
        onPress={() => {
          router.push("/lagg-till");
        }}>
        <Text>Lägg till Aktivitet</Text>
      </Pressable>
    </View >
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
