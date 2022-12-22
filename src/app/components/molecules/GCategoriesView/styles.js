import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    width: 100,
    minHeight: 120,
  },
  img: {
    width: 100,
    height: 70,
    borderRadius: 6,
  },
  text: {
    marginTop: 8,
    color: colors.GRAY,
    fontWeight: "bold",
    marginLeft: 6,
    fontSize: 13,
  },
});

export default styles;
