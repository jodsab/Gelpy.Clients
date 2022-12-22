import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { logoutSuccess } from "../../../redux/actions/authActions";
import { globalStyles } from "../../../../shared/global-styles";
import { useDispatch } from "react-redux";
import navigations from "../../../../shared/navigations";

const ProfileTemplate = ({ navigation }) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logoutSuccess());
    navigation.navigate(navigations.CARROUSEL);
  };

  return (
    <View>
      <Text>ProfileTemplate</Text>
      <TouchableOpacity onPress={() => logoutUser()}>
        <Text style={globalStyles.buttonPadding}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTemplate;
