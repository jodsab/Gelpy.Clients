import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../../../../shared/global-styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../../shared/colors";

const GInputPassword = ({ icon, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[globalStyles.shadow, styles.inputContainer]}>
      <Text style={styles.icon}>
        <MaterialIcons name="lock-outline" size={12} color={colors.GRAY} />
      </Text>

      <TextInput
        secureTextEntry={showPassword ? false : true}
        style={[styles.input]}
        {...props}
      />
      <Ionicons
        style={styles.toggleButton}
        onPress={() => setShowPassword(!showPassword)}
        name={showPassword ? "eye-off-outline" : "eye-outline"}
        color={"#989898"}
        size={20}
      />
    </View>
  );
};

export default GInputPassword;
