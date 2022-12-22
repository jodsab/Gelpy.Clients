import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const GBackButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.backIconView} {...props}>
      <Ionicons name="chevron-back" color={"white"} size={30} />
    </TouchableOpacity>
  );
};

export default GBackButton;
