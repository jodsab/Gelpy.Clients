import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { globalStyles } from "../../../../shared/global-styles";
import GText from "../../atoms/GText";
import * as t from "../../../../core/constants/translations/index.js";
import navigations from "../../../../shared/navigations";

const LoginTemplate = ({ navigation }) => {
  const m = t?.default?.login;
  return (
    <View style={styles.body}>
      <View style={styles.top}>
        <GText style={styles.header}>{m?.header}</GText>
        <Image
          style={styles.logo}
          source={require("../../../../../assets/imgs/InLoveBlanco.png")}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.circle}></View>
        <View style={styles.spaceBottom}>
          <GText style={[styles.white, styles.bigText]} bold={true}>
            {m?.welcome}
          </GText>
          <GText style={[styles.white, styles.getStarted]}>
            {m?.accountMssg}
          </GText>
          <View style={styles.buttons}>
            <TouchableOpacity
              disabled={false}
              onPress={() => navigation.navigate(navigations.ACCESSLOGIN)}
              style={[styles.capsule, styles.login]}
            >
              <GText style={[styles.loginText, globalStyles.buttonPadding]}>
                {m?.btnLogin}
              </GText>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              onPress={() => navigation.navigate(navigations.ACCESSREGISTER)}
              style={[styles.capsule, styles.register]}
            >
              <GText style={[styles.registerText, globalStyles.buttonPadding]}>
                {m?.btnRegister}
              </GText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginTemplate;
