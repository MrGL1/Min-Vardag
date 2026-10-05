import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detaljer() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>{id}</Text>
        </View>
    );
}