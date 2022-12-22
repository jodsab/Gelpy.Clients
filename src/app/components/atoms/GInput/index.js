import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../../../../shared/global-styles";
import React from "react";
import styles from "./styles";

const GInput = ({ icon, inputStyles, ...props }) => {
  return (
    <View style={[globalStyles.shadow, styles.inputContainer]}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <TextInput style={[styles.input, inputStyles]} {...props} />
    </View>
  );
};

export default GInput;
