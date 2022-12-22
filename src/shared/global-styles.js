import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  buttonPadding: {
    fontWeight: "bold",
    padding: 13,
    textAlign: "center",
    borderRadius: 25,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
