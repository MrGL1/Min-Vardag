import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import * as Location from "expo-location";


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

                </Text>
            </Pressable>
        </View>
    );
}