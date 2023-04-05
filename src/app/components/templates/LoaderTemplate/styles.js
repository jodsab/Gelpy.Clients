import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.TRANSPARENT,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 99,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  logo: {
    height: 130,
    width: 80,
  },
});

export default styles;
