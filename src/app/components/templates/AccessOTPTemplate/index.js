import { View, Text, TextInput } from "react-native";
import React, { useRef, useEffect } from "react";
import * as t from "../../../../core/constants/translations/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import GBackButton from "../../atoms/GBackButton";
import styles from "./styles";

const AccessOTPTemplate = () => {
  const m = t?.default?.accessOTP;

  const value1 = useRef(null);
  const value2 = useRef(null);
  const value3 = useRef(null);
  const value4 = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <GBackButton />
        <Text style={styles.header}>{m?.header}</Text>
        <View style={styles.blueText}>
          <Text style={styles.lightBlue}>{m?.sendTo}</Text>
          <Text style={styles.lightBlue}>+51 999 999 999</Text>
        </View>
        <Text style={styles.code}>{m?.code}</Text>
        <View style={styles.inputs}>
          <TextInput
            ref={value1}
            style={styles.input}
            maxLength={1}
            onChange={(e) => {
              if (e.nativeEvent.text?.length === 1) {
                value2.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={value2}
            style={styles.input}
            maxLength={1}
            onChange={(e) => {
              if (e.nativeEvent.text?.length === 0) {
                value1.current.focus();
              } else {
                value3.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={value3}
            style={styles.input}
            maxLength={1}
            onChange={(e) => {
              if (e.nativeEvent.text?.length === 0) {
                value2.current.focus();
              } else {
                value4.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={value4}
            style={styles.input}
            maxLength={1}
            onChange={(e) => {
              if (e.nativeEvent.text?.length === 0) {
                value3.current.focus();
              }
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.bottom}>
        <View>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>{m?.confirm}</Text>
          </TouchableOpacity>
          <View style={styles.errors}>
            <Text style={styles.error1}>{m?.error1}</Text>
            <Text style={styles.error2}> {m?.error2}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccessOTPTemplate;
