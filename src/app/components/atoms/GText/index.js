import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";

const GText = ({ style, bold, children, ...props }) => {
  const [loaded] = useFonts({
    GilroyMedium: require("../../../../../assets/fonts/Gilroy-Medium.ttf"),
    GilroyBold: require("../../../../../assets/fonts/Gilroy-Bold.ttf"),
  });
  if (loaded) {
    return (
      <Text
        style={[{ fontFamily: bold ? "GilroyBold" : "GilroyMedium" }, style]}
      >
        {children}
      </Text>
    );
  }
};

export default GText;
