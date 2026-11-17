import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantCard({ restaurant }) {
  return (
    <View style={{ padding: 15 }}>
      <Text>{restaurant.name}</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="star" size={18} color="gold" />
        <Text>{restaurant.rating}</Text>
      </View>
    </View>
  );
}