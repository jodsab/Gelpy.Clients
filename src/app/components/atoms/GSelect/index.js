import { View, Text } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import { globalStyles } from "../../../../shared/global-styles";

const GSelect = ({ items, placeholder, ...props }) => {
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
        prompt={placeholder}
        style={{
          height: "100%",
          width: props.width || "100%",
          left: 10,
          borderColor: "red",
          borderWidth: 1,
        }}
        selectedValue={selectedLanguage}
        {...props}
      >
        <Picker.Item label="Select..." value="" style={{ color: "#767676" }} />
        {items?.map((i, index) => (
          <Picker.Item
            key={index}
            label={i?.label}
            value={i?.value}
            style={{ color: "black" }}
          />
        ))}
      </Picker>
    </View>
  );
};

export default GSelect;
