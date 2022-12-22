import { View, Text, Button, TouchableOpacity } from "react-native";
import * as t from "../../../../core/constants/translations/index";
import GInput from "../../atoms/GInput";
import { Formik } from "formik";
import React from "react";
import { FontAwesome5, Foundation } from "@expo/vector-icons";
import GBackButton from "../../atoms/GBackButton";
import GSelect from "../../atoms/GSelect";
import GInputPassword from "../../atoms/GInputPassword";
import styles from "./styles";
import { globalStyles } from "../../../../shared/global-styles";
import UsersService from "../../../../Api/users";

const ICON_SIZE = 10;
const ICON_SIZE2 = 14;

const AccessRegistertemplate = ({ navigation }) => {
  const m = t?.default?.accessRegister;

  const registerUser = async (data) => {
    const rsp = await UsersService.postRegister(data);
    console.log("register rsp", rsp);
  };

  return (
    <View style={styles.container}>
      <GBackButton onPress={() => navigation.goBack()} />
      <Text style={styles.header}>{m?.header}</Text>
      <View style={styles.other}>
        <View style={styles.bar}></View>
        <Text style={styles.otherText}>{m?.other}</Text>
        <View style={styles.bar}></View>
      </View>
      <Formik
        initialValues={{
          userName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
          city: "",
          district: "",
        }}
        onSubmit={(values) => registerUser(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <GInput
              onChangeText={handleChange("userName")}
              onBlur={handleBlur("userName")}
              value={values.userName}
              icon={
                <FontAwesome5 name="user" size={ICON_SIZE} color="#8e8e8e" />
              }
              placeholder="Nombres: "
            />
            <GInput
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
              icon={
                <FontAwesome5 name="user" size={ICON_SIZE} color="#8e8e8e" />
              }
              placeholder={`${m?.lastName}: `}
            />
            <GInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              icon={
                <FontAwesome5 name="user" size={ICON_SIZE} color="#8e8e8e" />
              }
              placeholder={`${m?.email}: `}
            />
            <GInputPassword
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              icon={
                <FontAwesome5 name="user" size={ICON_SIZE} color="#8e8e8e" />
              }
              placeholder={`${m?.password}: `}
            />
            <View style={styles.dflex}>
              <View style={styles.countrySelect}>
                <GSelect />
              </View>
              <View style={styles.cellphoneInput}>
                <GInput
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  icon={
                    <Foundation
                      name="telephone"
                      size={ICON_SIZE2}
                      color="black"
                    />
                  }
                  placeholder={`${m?.cellphone}: `}
                />
              </View>
            </View>

            <GInput
              onChangeText={handleChange("city")}
              onBlur={handleBlur("city")}
              value={values.city}
              placeholder={`${m?.city}: `}
            />
            <GInput
              onChangeText={handleChange("district")}
              onBlur={handleBlur("district")}
              value={values.district}
              placeholder={`${m?.district}: `}
            />
            <View style={styles.textContainer}>
              <Text style={styles.black}>{m?.tyc1}</Text>
              <Text style={styles.blue}> {m?.tyc2}</Text>
              <Text style={styles.black}> {m?.tyc3}</Text>
              <Text style={styles.blue}> {m?.tyc4}</Text>
            </View>
            <TouchableOpacity onPress={handleSubmit} title="Submit">
              <Text style={[styles.textContinue, globalStyles.buttonPadding]}>
                {m?.continue}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AccessRegistertemplate;
