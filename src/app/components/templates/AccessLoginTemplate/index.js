import { View, Image, TouchableOpacity, Alert } from "react-native";
import GBackButton from "../../atoms/GBackButton";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Formik } from "formik";
import GInput from "../../atoms/GInput";
import * as t from "../../../../core/constants/translations/index";
import * as yup from "yup";
import GInputPassword from "../../atoms/GInputPassword";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../../shared/colors";
import { globalStyles } from "../../../../shared/global-styles";
import navigations from "../../../../shared/navigations";
import UsersService from "../../../../Api/users";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../redux/actions/authActions";
import LoaderTemplate from "../LoaderTemplate";
import GError from "../../atoms/GError";
import GText from "../../atoms/GText";

const { form } = t?.default?.accessLogin;

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(form?.email?.required),
  password: yup.string().required(form?.password?.required),
});

const AccessLoginTemplate = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const m = t?.default?.accessLogin;
  const dispatch = useDispatch();
  const stored = useSelector((state) => state);

  const getUserLogin = async (data) => {
    try {
      setLoading(true);
      const rsp = await UsersService.getLoginUser(data);
      if (rsp?.result?.succeeded) {
        dispatch(
          loginSuccess({
            token: rsp?.jwt,
          })
        );
        navigation.navigate(navigations.HOME);
      } else if (
        rsp?.result?.isLockedOut === false &&
        rsp?.result?.isNotAllowed === false &&
        rsp?.result?.requiresTwoFactor === false &&
        rsp?.result?.succeeded === false
      ) {
        Alert.alert(m?.errors?.isNotSucceeded, "", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else if (rsp?.result?.isNotAllowed === true) {
        Alert.alert(m?.errors?.isNotSucceeded, "", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else if (rsp?.result?.isLockedOut === true) {
        Alert.alert(m?.errors?.isLockedOut, "", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else if (rsp?.result?.succeeded === false) {
        Alert.alert(m?.errors?.isNotAllowed, "", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("stored", stored);
  }, [stored]);

  return (
    <View style={styles.container2}>
      {loading && <LoaderTemplate />}
      <View style={styles.container}>
        <GBackButton onPress={() => navigation.goBack()} />
        <View>
          <Image
            style={styles.logo}
            source={require("../../../../../assets/imgs/Picardia.png")}
          />
        </View>

        <GText style={styles.header}>{m?.header}</GText>
        <GText style={styles.or}>{m?.or}</GText>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => getUserLogin(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            isValid,
            touched,
            values,
          }) => (
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
              {errors?.email && touched.email && (
                <GError error={errors?.email} />
              )}
              <GInputPassword
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder={m?.password}
              />
              {errors?.password && touched.password && (
                <GError error={errors?.password} />
              )}
              <GText style={styles.forgot}>{m?.forgot}</GText>
              <TouchableOpacity onPress={handleSubmit} title="Submit">
                <GText style={[styles.login, globalStyles.buttonPadding]}>
                  {m?.login}
                </GText>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <GText style={[styles.newUser, globalStyles.buttonPadding]} bold>
          {m?.newUser}
        </GText>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigations.ACCESSREGISTER)}
        >
          <GText style={[styles.register, globalStyles.buttonPadding]}>
            {m?.register}
          </GText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccessLoginTemplate;
