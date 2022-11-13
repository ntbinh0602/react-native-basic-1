import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "Hôm nay thât tuyệt", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Ngày mai thật tuyệt", rating: 4, body: "lorem ipsum", key: "2" },
    { title: "Ngày kia thât tuyệt", rating: 3, body: "lorem ipsum", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
