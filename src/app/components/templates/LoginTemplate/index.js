import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { globalStyles } from "../../../../shared/global-styles";
import FontText from "../../atoms/GText";
import * as t from "../../../../core/constants/translations/index.js";
import navigations from "../../../../shared/navigations";

const LoginTemplate = ({ navigation }) => {
  const m = t?.default?.login;
  return (
    <View style={styles.body}>
      <View style={styles.top}>
        <Text style={styles.header}>{m?.header}</Text>
        <Image
          style={styles.logo}
          source={require("../../../../../assets/imgs/InLoveBlanco.png")}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.circle}></View>
        <View style={styles.spaceBottom}>
          <Text style={[styles.white, styles.bigText]}>{m?.welcome}</Text>
          <Text style={[styles.white, styles.getStarted]}>
            {m?.accountMssg}
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              disabled={false}
              onPress={() => navigation.navigate(navigations.ACCESSLOGIN)}
              style={[styles.capsule, styles.login]}
            >
              <Text style={[styles.loginText, globalStyles.buttonPadding]}>
                {m?.btnLogin}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              onPress={() => navigation.navigate(navigations.ACCESSREGISTER)}
              style={[styles.capsule, styles.register]}
            >
              <Text style={[styles.registerText, globalStyles.buttonPadding]}>
                {m?.btnRegister}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginTemplate;
