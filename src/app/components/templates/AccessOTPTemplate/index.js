import { View, Text, TextInput } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import Clipboard from "@react-native-community/clipboard";
import * as t from "../../../../core/constants/translations/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import GBackButton from "../../atoms/GBackButton";
import OTPTextView from "react-native-otp-textinput";
import OtpInput from "react-otp-input";
import GText from "../../atoms/GText";
import styles from "./styles";

const AccessOTPTemplate = ({ route, navigation }) => {
  const otpInput = useRef(null);
  const m = t?.default?.accessOTP;

  const { token, phoneNumber } = route?.params;
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = () => {
    Clipboard.setString("hello world");
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  const value1 = useRef(null);
  const value2 = useRef(null);
  const value3 = useRef(null);
  const value4 = useRef(null);
  const value5 = useRef(null);
  const value6 = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <GBackButton onPress={() => navigation.goBack()} />
        {/* <OTPTextView inputCount={6} ref={(e) => otpInput} />
        <OtpInput
          value={otp}
          onChange={(value) => handleChange(value)}
          numInputs={6}
          separator={<span>-</span>}
        /> */}
        <Text>HOLA {copiedText}</Text>
        <GText style={styles.header} bold>
          {m?.header}
        </GText>
        <View style={styles.blueText}>
          <GText style={styles.lightBlue}>{m?.sendTo}</GText>
          <GText style={styles.lightBlue}> {phoneNumber}</GText>
        </View>
        <GText style={styles.code}>{m?.code}</GText>
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
            onChangeText={(e) => {}}
            onPressIn={fetchCopiedText}
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
              } else {
                value5.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={value5}
            style={styles.input}
            maxLength={1}
            onChange={(e) => {
              if (e.nativeEvent.text?.length === 0) {
                value4.current.focus();
              } else {
                value6.current.focus();
              }
            }}
          ></TextInput>
          <TextInput
            ref={value6}
            style={styles.input}
            maxLength={1}
            onChange={(e) => {
              if (e.nativeEvent.text?.length === 0) {
                value5.current.focus();
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
