import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import * as Location from "expo-location";
import * as Clipboard from "expo-clipboard";
import * as Battery from "expo-battery";

export default function Detaljer() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>{id}</Text>
            <Pressable onPress={async () => {
                const permission = await Location.requestForegroundPermissionsAsync();
                if (permission.status !== "granted") {
                    return;
                }
                const position = await Location.getCurrentPositionAsync();
                console.log(position.coords);
            }}>
                <Text>
                    Hämta min plats
                </Text>
            </Pressable>

            <Pressable onPress={() => {
                Clipboard.setStringAsync(id as string);
            }}>
                <Text>
                    Kopiera syssla
                </Text>
            </Pressable>

            <Pressable onPress={async () => {
                const level = await Battery.getBatteryLevelAsync()
                console.log(level);
            }}>
                <Text>
                    Visa batterinivå
                </Text>
            </Pressable>
        </View>
    );
}