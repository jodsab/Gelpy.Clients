import React from "react";
import { Text } from "react-native";

const GError = ({ error }) => {
  return <Text style={{ fontSize: 10, color: "red" }}>{error}</Text>;
};

export default GError;
