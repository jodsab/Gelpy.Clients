import { StyleSheet } from "react-native";
import colors from "../../../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backIconView: {
    backgroundColor: colors.PURPLE,
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  header: {
    fontSize: 23,
    color: colors.BLUE,
    textAlign: "center",
  },
  other: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
    marginVertical: 7,
  },
  otherText: {
    marginHorizontal: 10,
  },
  bar: {
    height: 1,
    width: 50,
    backgroundColor: "black",
    marginTop: 2,
  },
  dflex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  countrySelect: {
    marginRight: 20,
  },
  cellphoneInput: {
    flex: 1,
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "85%",
    marginVertical: 14,
  },
  black: {
    opacity: 0.4,
    fontSize: 11,
  },
  blue: {
    color: colors.BLUE,
    fontSize: 11,
  },
  textContinue: {
    color: "white",
    fontSize: 18,
    backgroundColor: colors.BLUE,
  },
});

export default styles;
