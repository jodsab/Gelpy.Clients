import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    /*     borderColor: "red",
    borderWidth: 1, */
    borderRadius: 25,
    marginVertical: 10,
  },
  icon: {
    paddingLeft: 15,
  },
  toggleButton: {
    zIndex: 1,
    marginRight: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    color: "#424242",
    paddingLeft: 8,
    paddingVertical: 8,
  },
});

export default styles;
