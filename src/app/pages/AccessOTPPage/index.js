import { View, Text } from "react-native";
import AccessOTPTemplate from "../../components/templates/AccessOTPTemplate";
import React from "react";

const AccessOTPPage = ({ route, navigation }) => {
  return <AccessOTPTemplate route={route} navigation={navigation} />;
};

export default AccessOTPPage;
