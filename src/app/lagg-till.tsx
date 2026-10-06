import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import * as Notifications from "expo-notifications";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    })
})

export default function LaggTill() {
    const { titel } = useLocalSearchParams();
    const [syssla, setSyssla] = useState("");
    const [datum, setDatum] = useState("");
    const [tid, setTid] = useState("");

    return (

        <View style={s.root}>
            <Text style={s.title}>
                {titel}
            </Text>

            <TextInput
                style={s.input}
                value={syssla}
                placeholder="Aktivitet"
                placeholderTextColor="gray"
                onChangeText={setSyssla} />

            <TextInput
                style={s.input}
                value={datum}
                placeholder="Datum"
                placeholderTextColor="gray"
                onChangeText={setDatum}
            />

            <TextInput
                style={s.input}
                value={tid}
                placeholder="Tid"
                placeholderTextColor="gray"
                onChangeText={setTid}
            />

            <Pressable style={s.button}
                onPress={async () => {
                    await Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Success
                    );

                    await Notifications.requestPermissionsAsync();

                    await Notifications.scheduleNotificationAsync({
                        content: {
                            title: "Min vardag",
                            body: `Påminnelse:${syssla}`,
                        },
                        trigger: {
                            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                            seconds: 5,
                        },
                    });

                    const sparade = await AsyncStorage.getItem("aktiviteter");

                    const aktiviteter = sparade
                        ? JSON.parse(sparade)
                        : [];

                    const nyAktivitet = {
                        aktivitet: syssla,
                        datum: datum,
                        tid: tid,
                    };

                    aktiviteter.push(nyAktivitet);

                    await AsyncStorage.setItem(
                        "aktiviteter",
                        JSON.stringify(aktiviteter)
                    );

                    router.replace("/");
                }}>
                <Text>
                    Lägg till
                </Text>

            </Pressable>


        </View>
    )
}

const s = StyleSheet.create({
    root: {
        flex: 1,
        padding: 24,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 12,
        borderRadius: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
    },
});
