import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  dotes: {
    position: "absolute",
    zIndex: 9,
    bottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  exit: {
    position: "absolute",
    zIndex: 9,
    right: 4,
  },
  exitText: {
    fontSize: 16,
    padding: 7,
  },
  off: {
    color: "rgba(192,192,192,1)",
  },
  on: {
    color: colors.BLUE,
  },
});

export default styles;
