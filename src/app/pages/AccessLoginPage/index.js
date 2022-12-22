import { View, Text } from "react-native";
import AccessLoginTemplate from "../../components/templates/AccessLoginTemplate";
import React, { useEffect } from "react";
import UsersService from "../../../Api/users";

const AccessLoginPage = ({ navigation }) => {
  useEffect(() => {}, []);

  return <AccessLoginTemplate navigation={navigation} />;
};

export default AccessLoginPage;
