import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";

import * as Clipboard from "expo-clipboard";


export default function Detaljer() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>{id}</Text>


            <Pressable onPress={() => {
                Clipboard.setStringAsync(id as string);
            }}>
                <Text>
                    Kopiera syssla
                </Text>
            </Pressable>


        </View>
    );
}