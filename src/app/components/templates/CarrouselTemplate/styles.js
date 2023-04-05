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
    top: 4,
  },
  next: {
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: "white",
    backgroundColor: colors.ORANGE,
    borderRadius: 8,
  },
});

export default styles;
