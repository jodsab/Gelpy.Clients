import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.DARK_BLUE,
    flex: 2,
    justifyContent: "flex-start",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    marginTop: 30,
    width: 150,
    height: 200,
  },
  bottom: {
    flex: 1,
    paddingTop: 90,
  },
  circle: {
    position: "absolute",
    zIndex: -1,
    height: "150%",
    width: "100%",
    backgroundColor: colors.BLUE,
    borderTopLeftRadius: 220,
    borderTopRightRadius: 220,
  },
  header: {
    color: colors.LIGHT_BLUE,
  },
  white: {
    color: "white",
    textAlign: "center",
  },
  bigText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  getStarted: {
    fontWeight: "100",
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    marginTop: 20,
  },
  capsule: {
    marginTop: 20,
  },
  loginText: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  register: {
    borderRadius: 25,
    backgroundColor: "white",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  registerText: {
    color: colors.BLUE,
  },
});

export default styles;
