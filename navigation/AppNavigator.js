import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RestaurantListScreen from "../screens/RestaurantListScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";

import { View, Text, StyleSheet } from "react-native";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RestaurantList"
          component={RestaurantListScreen}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}