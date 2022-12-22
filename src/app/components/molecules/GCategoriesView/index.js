import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const GCategoriesView = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: item?.imgURL }} />
      <Text style={styles.text}>{item?.name}</Text>
    </View>
  );
};

export default GCategoriesView;
