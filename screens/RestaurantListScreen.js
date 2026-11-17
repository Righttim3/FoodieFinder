import { View, FlatList } from "react-native";
import RestaurantCard from "../components/RestaurantCard";

const restaurants = [
  { id: "1", name: "Pizza Palace", rating: 4.5 },
  { id: "2", name: "Burger Hub", rating: 4.2 },
];


export default function RestaurantListScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantCard restaurant={item} />
        )}
      />
    </View>
  );
}