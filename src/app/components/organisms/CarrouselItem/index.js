import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import GText from "../../atoms/GText";

const CarrouselItem = ({ text }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../../../assets/imgs/Feliz.png")}
      />
      <GText style={styles.textLight}>{text[0]}</GText>
      <GText style={styles.textBold} bold>
        {text[1]}
      </GText>
    </View>
  );
};

export default CarrouselItem;
