import { View, Text, Image, TouchableOpacity } from "react-native";
import GBackButton from "../../atoms/GBackButton";
import React, { useEffect } from "react";
import styles from "./styles";
import { Formik } from "formik";
import GInput from "../../atoms/GInput";
import GInputPassword from "../../atoms/GInputPassword";
import * as t from "../../../../core/constants/translations/index";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import colors from "../../../../shared/colors";
import { globalStyles } from "../../../../shared/global-styles";
import navigations from "../../../../shared/navigations";
import UsersService from "../../../../Api/users";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../redux/actions/authActions";

const AccessLoginTemplate = ({ navigation }) => {
  const m = t?.default?.accessLogin;
  const dispatch = useDispatch();
  const stored = useSelector((state) => state);

  const getUserLogin = async (data) => {
    const rsp = await UsersService.getLoginUser(data);
    console.log("rsp", rsp);
    if (rsp?.result?.succeeded) {
      dispatch(
        loginSuccess({
          token: rsp?.jwt,
        })
      );
      navigation.navigate(navigations.HOME);
    }
  };

  useEffect(() => {
    console.log("stored", stored);
  }, [stored]);

  return (
    <View style={styles.container}>
      <GBackButton onPress={() => navigation.goBack()} />
      <View>
        <Image
          style={styles.logo}
          source={require("../../../../../assets/imgs/Picardia.png")}
        />
      </View>

      <Text style={styles.header}>{m?.header}</Text>
      <Text style={styles.or}>{m?.or}</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => getUserLogin(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <GInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              icon={
                <MaterialCommunityIcons
                  name="email-outline"
                  size={12}
                  color={colors.GRAY}
                />
              }
              placeholder={m?.email}
            />
            <GInputPassword
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder={m?.password}
            />
            <Text style={styles.forgot}>{m?.forgot}</Text>
            <TouchableOpacity onPress={handleSubmit} title="Submit">
              <Text style={[styles.login, globalStyles.buttonPadding]}>
                {m?.login}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <Text style={[styles.newUser, globalStyles.buttonPadding]}>
        {m?.newUser}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigations.ACCESSREGISTER)}
      >
        <Text style={[styles.register, globalStyles.buttonPadding]}>
          {m?.register}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccessLoginTemplate;
