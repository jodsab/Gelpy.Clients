import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import * as t from "../../../../core/constants/translations/index";
import GInput from "../../atoms/GInput";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { FontAwesome5, Foundation } from "@expo/vector-icons";
import GBackButton from "../../atoms/GBackButton";
import GSelect from "../../atoms/GSelect";
import GInputPassword from "../../atoms/GInputPassword";
import styles from "./styles";
import { globalStyles } from "../../../../shared/global-styles";
import GError from "../../atoms/GError";
import ScrollArea from "../../organisms/ScrollArea";
import { openBrowserAsync } from "expo-web-browser";
import { GELPY_APP } from "../../../../shared/configuration";
import registerValidationSchema from "./validation";
import GText from "../../atoms/GText";
import LoaderTemplate from "../LoaderTemplate";
import { containsOnlyNumbers } from "../../../../shared/validations";
import UsersService from "../../../../Api/users";

const ICON_SIZE = 10;
const ICON_SIZE2 = 14;

const AccessRegistertemplate = ({
  navigation,
  onChangeCodeGetCitys,
  onChangeCitysGetDistricts,
  countrys,
  citys,
  districts,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const m = t?.default?.accessRegister;
  const codigos = [];
  const ciudades = [];
  const distritos = [];

  countrys?.map((e) => codigos.push({ label: `+${e?.codPais}`, value: e }));
  citys?.map((e) => ciudades.push({ label: e?.nombre, value: e }));
  districts?.map((e) => distritos.push({ label: e?.nombre, value: e }));

  const submitRegister = async (data) => {
    try {
      setLoading(true);
      const rsp = await UsersService.postRegister(data);
      console.log("rsp", rsp);
      if (rsp?.result?.succeeded) {
        navigation.navigate(Routes.ACCESSOTP, {
          token: rsp?.jwt,
          phoneNumber: data?.phoneNumber,
        });
      } else {
        Alert.alert(rsp?.result?.errors[0]?.description, "", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <LoaderTemplate />}
      <ScrollArea>
        <View style={{ flex: 1 }}>
          <GBackButton onPress={() => navigation.goBack()} />
          <GText style={styles.header} bold>
            {m?.header}
          </GText>
          <View style={styles.other}>
            <View style={styles.bar}></View>
            <GText style={styles.otherText}>{m?.other}</GText>
            <View style={styles.bar}></View>
          </View>
          <Formik
            initialValues={{
              userName: "",
              firstName: "",
              lastName: "",
              email: "",
              code: "",
              password: "",
              phoneNumber: "",
              city: "",
              district: "",
            }}
            onSubmit={(values) => {
              const { city, district, code, ...restOfValues } = values;
              restOfValues.userName = restOfValues?.email;
              restOfValues.ubiGeo = district?.codUbiGeo;
              restOfValues.phoneNumber = `${code?.codPais}${restOfValues.phoneNumber}`;
              console.log(restOfValues);
              submitRegister(restOfValues);
            }}
            validationSchema={registerValidationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              setFieldValue,
              isValid,
              touched,
              values,
            }) => (
              <>
                <GInput
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  icon={
                    <FontAwesome5
                      name="user"
                      size={ICON_SIZE}
                      color="#8e8e8e"
                    />
                  }
                  placeholder={`${m?.form?.firstName?.input}: `}
                />
                {errors?.firstName && touched.firstName && (
                  <GError error={errors?.firstName} />
                )}
                <GInput
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  icon={
                    <FontAwesome5
                      name="user"
                      size={ICON_SIZE}
                      color="#8e8e8e"
                    />
                  }
                  placeholder={`${m?.form?.lastName?.input}: `}
                />
                {errors?.lastName && touched.lastName && (
                  <GError error={errors?.lastName} />
                )}
                <GInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  icon={
                    <FontAwesome5
                      name="user"
                      size={ICON_SIZE}
                      color="#8e8e8e"
                    />
                  }
                  placeholder={`${m?.form?.email?.input}: `}
                />
                {errors?.email && touched.email && (
                  <GError error={errors?.email} />
                )}
                <GInputPassword
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  icon={
                    <FontAwesome5
                      name="user"
                      size={ICON_SIZE}
                      color="#8e8e8e"
                    />
                  }
                  placeholder={`${m?.form?.password?.input}: `}
                />
                {errors?.password && touched.password && (
                  <GError error={errors?.password} />
                )}
                <View style={styles.dflex}>
                  <View style={styles.countrySelect}>
                    <GSelect
                      width={100}
                      onValueChange={(itemValue, itemIndex) => {
                        setFieldValue("city", "");
                        setFieldValue("district", "");
                        setFieldValue("code", itemValue);
                        onChangeCodeGetCitys(itemValue.codUbiGeo);
                      }}
                      selectedValue={values.code}
                      items={codigos}
                    />
                  </View>
                  <View style={styles.cellphoneInput}>
                    <GInput
                      keyboardType="numeric"
                      onChangeText={(value) => {
                        if (value.length === 0) {
                          setFieldValue("phoneNumber", "");
                        } else {
                          containsOnlyNumbers(value)
                            ? setFieldValue("phoneNumber", value)
                            : console.log(value);
                        }
                      }}
                      onBlur={handleBlur("phoneNumber")}
                      value={values.phoneNumber}
                      icon={
                        <Foundation
                          name="telephone"
                          size={ICON_SIZE2}
                          color="black"
                        />
                      }
                      placeholder={`${m?.form?.cellphone?.input}: `}
                    />
                  </View>
                </View>
                {errors?.code && touched.code && (
                  <GError error={errors?.code} />
                )}
                {errors?.phoneNumber && touched.phoneNumber && (
                  <GError error={errors?.phoneNumber} />
                )}
                <GSelect
                  onValueChange={(itemValue, itemIndex) => {
                    setFieldValue("district", "");
                    setFieldValue("city", itemValue);
                    onChangeCitysGetDistricts(itemValue.codUbiGeo);
                  }}
                  selectedValue={values.city}
                  items={ciudades}
                />
                {errors?.city && touched.city && (
                  <GError error={errors?.city} />
                )}
                <GSelect
                  onValueChange={(itemValue, itemIndex) => {
                    setFieldValue("district", itemValue);
                  }}
                  selectedValue={values.district}
                  items={distritos}
                />
                {errors?.district && touched.district && (
                  <GError error={errors?.district} />
                )}
                <View style={styles.textContainer}>
                  <GText style={styles.black}>{m?.tyc1}</GText>
                  <TouchableOpacity
                    onPress={() => openBrowserAsync(GELPY_APP?.terms)}
                  >
                    <GText style={styles.blue}> {m?.tyc2}</GText>
                  </TouchableOpacity>
                  <GText style={styles.black}> {m?.tyc3}</GText>
                  <TouchableOpacity
                    onPress={() => openBrowserAsync(GELPY_APP?.privacy)}
                  >
                    <GText style={styles.blue}>{m?.tyc4}</GText>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleSubmit} title="Submit">
                  <GText
                    style={[styles.textContinue, globalStyles.buttonPadding]}
                  >
                    {m?.continue}
                  </GText>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollArea>
    </View>
  );
};

export default AccessRegistertemplate;
