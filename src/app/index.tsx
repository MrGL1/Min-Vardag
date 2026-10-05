import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Min Vardag </Text>
      <Pressable onPress={() => {
        router.push("/sysslor");
      }}>
        <Text> Sysslor </Text>
      </Pressable>
    </View>
  );
}
