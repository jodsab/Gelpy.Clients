import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  logo: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 200,
    width: 200,
  },
  header: {
    color: colors.BLUE,
    textAlign: "center",
    fontSize: 13,
  },
  or: {
    color: colors.BLUE,
    textAlign: "center",
    fontSize: 13,
  },
  forgot: {
    color: colors.ORANGE,
    textAlign: "center",
    fontSize: 13,
  },
  login: {
    marginTop: 20,
    color: colors.BLUE,
    borderColor: colors.BLUE,
    borderWidth: 1,
  },
  newUser: {
    color: colors.BLUE,
  },
  register: {
    color: "white",
    backgroundColor: colors.BLUE,
    borderColor: colors.BLUE,
    borderWidth: 1,
  },
});

export default styles;
