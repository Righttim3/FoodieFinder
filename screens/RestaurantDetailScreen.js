import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function RestaurantDetailScreen() {
  return (


    <View style={styles.container}>
      <Text style={styles.title}>Pizza Palace 🍕</Text>

      <View style={styles.row}>
        <Ionicons name="star" size={20} color="gold" />
        <Text style={styles.text}> 4.5 Rating</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="location" size={20} color="red" />
        <Text style={styles.text}>
          123 Main Street, Calgary, AB
        </Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="call" size={20} color="green" />
        <Text style={styles.text}>
          (403) 555-1234
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
});


  


