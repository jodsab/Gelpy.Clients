import { View, Text } from "react-native";
import React from "react";
import HomeTemplate from "../../components/templates/HomeTemplate";
import { useSelector } from "react-redux";

const HomePage = ({ navigation }) => {
  const categories = useSelector((state) => state?.categories);

  return <HomeTemplate navigation={navigation} categories={categories} />;
};

export default HomePage;
