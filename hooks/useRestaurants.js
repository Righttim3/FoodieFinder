import { useState, useEffect } from "react";
import axios from "axios";

import { View, Text, StyleSheet } from "react-native";
export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await axios.get(
          "API_URL"
        );

        setRestaurants(response.data.businesses);
      } catch (error) {
        console.log(error);
      }
    };

    getRestaurants();
  }, []);

  return restaurants;
}
