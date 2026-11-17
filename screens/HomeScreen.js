// import { View, Text } from "react-native";

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>Welcome to FoodieFinder 🍽️</Text>
//     </View>
//   );
// }



import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to FoodieFinder 🍽️</Text>
    </View>
  );
}