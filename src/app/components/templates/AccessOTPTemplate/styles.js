import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    flex: 1,
    padding: 20,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 50,
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
  blueText: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  lightBlue: {
    color: colors.LIGHT_BLUE,
  },
  code: {
    color: "white",
    marginBottom: 10,
  },
  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "white",
    width: "12%",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    textAlign: "center",
  },
  bottom: {
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: colors.DARK_BLUE,
    borderRadius: 30,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  confirmText: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  errors: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  error1: {
    color: "white",
  },
  error2: {
    color: colors.LIGHT_BLUE,
  },
});

export default styles;
