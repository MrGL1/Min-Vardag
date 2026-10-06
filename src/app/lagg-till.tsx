import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";


export default function LaggTill() {
    const [syssla, setSyssla] = useState("");
    const [datum, setDatum] = useState("");
    const [tid, setTid] = useState("");

    return (
        <View>
            <Text>
                Lägg till syssla
            </Text>

            <TextInput
                value={syssla}
                placeholder="Syssla"
                onChangeText={setSyssla} />

            <TextInput
                placeholder="Datum"
                value={datum}
                onChangeText={setDatum}
            />

            <TextInput
                placeholder="Tid"
                value={tid}
                onChangeText={setTid}
            />

            <Text onPress={() => {
                router.push({
                    pathname: "/",
                    params: {
                        syssla: syssla,
                        datum: datum,
                        tid: tid
                    }
                });
            }}>
                Lägg till
            </Text>
        </View>
    )
}