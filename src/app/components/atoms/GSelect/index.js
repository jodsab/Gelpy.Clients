import { View, Text } from "react-native";
import React, { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import { globalStyles } from "../../../../shared/global-styles";

const GSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <View style={[styles.inputContainer, globalStyles.shadow]}>
      <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="+51" value="51" />
      </Picker>
    </View>
  );
};

export default GSelect;
