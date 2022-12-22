import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 10,
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 8,
    color: colors.GRAY,
    fontWeight: "bold",
  },
  searcherIcon: {
    backgroundColor: colors.PURPLE,
    padding: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 21,
    color: colors.BLUE,
    fontWeight: "bold",
  },
  list: {
    marginTop: 10,
  },
});

export default styles;
