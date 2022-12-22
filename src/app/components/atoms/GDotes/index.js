import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";

const GDotes = ({ active }) => {
  const [isActive, setIsactive] = useState(false);

  useEffect(() => {
    setIsactive(active);
  }, [active]);
  return (
    <View
      style={[styles.dote, isActive ? styles.active : styles.container]}
    ></View>
  );
};

export default GDotes;
