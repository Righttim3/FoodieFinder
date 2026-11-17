import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
      }}
    >
      <Ionicons name="restaurant" size={28} color="tomato" />

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        FoodieFinder
      </Text>
    </View>
  );
}