import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRouter from "./TabRouter";
import LoginPage from "./pages/LoginPage";
import LoaderPage from "./pages/LoaderPage";
import CarrouselPage from "./pages/CarrouselPage";
import AccessRegisterPage from "./pages/AccessRegisterPage";
import AccessOTPPage from "./pages/AccessOTPPage";
import AccessLoginPage from "./pages/AccessLoginPage";
import React, { useEffect } from "react";
import navigations from "../shared/navigations";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CategoriesService from "../Api/categories";
import { storeCategories } from "./redux/actions/categoriesActions";

const Stack = createNativeStackNavigator();

const GelpyRouter = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state?.auth?.currentUser);

  const fetchCategories = async (tkn) => {
    const categories = await CategoriesService.getCategories(tkn);
    console.log("aquii", categories);
    if (categories) {
      dispatch(storeCategories(categories));
    }
  };

  useEffect(() => {
    if (dataUser) {
      fetchCategories(dataUser?.token);
    }
  }, [dataUser]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigations.CARROUSEL}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={navigations.HOME} component={TabRouter} />
        <Stack.Screen name={navigations.LOGIN} component={LoginPage} />
        <Stack.Screen name={navigations.LOADER} component={LoaderPage} />
        <Stack.Screen name={navigations.CARROUSEL} component={CarrouselPage} />
        <Stack.Screen
          name={navigations.ACCESSREGISTER}
          component={AccessRegisterPage}
        />
        <Stack.Screen name={navigations.ACCESSOTP} component={AccessOTPPage} />
        <Stack.Screen
          name={navigations.ACCESSLOGIN}
          component={AccessLoginPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GelpyRouter;
