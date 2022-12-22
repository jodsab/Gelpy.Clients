import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarrouselItem from "../../organisms/CarrouselItem";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GDotes from "../../atoms/GDotes";
import * as t from "../../../../core/constants/translations/index";
import navigations from "../../../../shared/navigations";
import { useSelector } from "react-redux";
import styles from "./styles";

const CarrouselTemplate = ({ navigation }) => {
  const [actualActive, setActualActive] = useState(0);
  const [exitActive, setExitActive] = useState(false);

  const width = Dimensions.get("window").width;
  const storedData = useSelector((state) => state?.auth);
  const m = t?.default?.loader;

  const IS_CONNECTED = storedData?.currentUser?.token;

  const redirectIfIsConnected = () => {
    IS_CONNECTED
      ? navigation.navigate(navigations.HOME)
      : navigation.navigate(navigations.LOGIN);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.exit}>
        <TouchableOpacity
          onPress={() => redirectIfIsConnected()}
          disabled={exitActive ? false : true}
        >
          <Text style={[styles.exitText, exitActive ? styles.on : styles.off]}>
            Omitir
          </Text>
        </TouchableOpacity>
      </View>
      <GestureHandlerRootView>
        <Carousel
          loop
          width={width}
          height={"100%"}
          autoPlay={false}
          data={m}
          scrollAnimationDuration={700}
          onSnapToItem={(index) => {
            setActualActive(index);
            setExitActive(true);
          }}
          renderItem={({ item }) => <CarrouselItem text={item} />}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
        />
      </GestureHandlerRootView>
      <View style={styles.dotes}>
        {m?.map((e, index) => (
          <GDotes key={index} active={index === actualActive ? true : false} />
        ))}
      </View>
    </View>
  );
};

export default CarrouselTemplate;
