import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Platform } from "react-native";
import GelpyRouter from "./src/app/Router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { Persistor } from "./src/app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <View style={[styles.statusBarBackground]}>
          <SafeAreaView style={[styles.statusBarBackground]}>
            <GelpyRouter />
          </SafeAreaView>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    flex: 1,
    height: Platform.OS === "ios" ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
    paddingTop: Platform.OS === "ios" ? 19 : 0,
  },
});
