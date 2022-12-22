import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  dote: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    backgroundColor: "rgba(192, 192, 192, 1)",
  },
  active: {
    backgroundColor: colors.ORANGE,
  },
});

export default styles;
