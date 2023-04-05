import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  logo: {
    height: 180,
    width: "30%",
  },
  textLight: {
    marginTop: 10,
    color: colors.BLUE,
    fontSize: 24,
    width: "50%",
    textAlign: "center",
  },
  textBold: {
    color: colors.BLUE,
    fontSize: 24,
    width: "50%",
    textAlign: "center",
  },
});

export default styles;
