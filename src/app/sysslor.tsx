import { View, Text, FlatList, Pressable } from "react-native";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";

export default function Sysslor() {
    const sysslor = ["Städa", "Träna", "Plugga"]
    return (
        <View>
            <Text>Mina sysslor!</Text>
            <FlatList
                data={sysslor}
                renderItem={({ item }) => {
                    return (

                        <Pressable onPress={() => {
                            Haptics.selectionAsync();
                            return router.push({
                                pathname: "/detaljer/[id]",
                                params: { id: item }
                            });
                        }}>
                            <Text>{item}</Text>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}