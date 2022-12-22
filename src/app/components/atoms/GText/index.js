import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";

const GText = ({ styles, children }) => {
  const [loaded] = useFonts({
    GilroyMedium: require("../../../../fonts/Gilroy-Medium.ttf"),
  });
  if (loaded) {
    return (
      <Text style={[{ fontFamily: "GilroyMedium" }, styles]}>{children}</Text>
    );
  }
};

export default GText;
