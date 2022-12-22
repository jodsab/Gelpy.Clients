import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const LoaderTemplate = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../../../assets/imgs/LogoBlanco.png")}
      />
    </View>
  );
};

export default LoaderTemplate;
