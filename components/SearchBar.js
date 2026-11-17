import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        padding: 10,
        margin: 10,
      }}
    >
      <Ionicons name="search" size={24} color="gray" />

      <TextInput
        placeholder="Search restaurants..."
        style={{ marginLeft: 10, flex: 1 }}
      />
    </View>
  );
}
