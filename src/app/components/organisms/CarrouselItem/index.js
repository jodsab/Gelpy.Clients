import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const CarrouselItem = ({ text }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../../../assets/imgs/Feliz.png")}
      />
      <Text style={styles.textLight}>{text[0]}</Text>
      <Text style={styles.textBold}>{text[1]}</Text>
    </View>
  );
};

export default CarrouselItem;
