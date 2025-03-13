import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    // backgroundColor: "green",
    paddingHorizontal: 37,
  },
  boxBottom: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  text: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 18,
  },
  titleInput: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 20,
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 40,
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: themes.colors.lightGray,
    borderColor: themes.colors.lightGray,
  },
  input: {
    height: "100%",
    width: "90%",
    // backgroundColor: "red",
    borderRadius: 40,
    paddingLeft: 5,
  },
  button: {
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.primary,
    borderRadius: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  textButton: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 16,
    color: themes.colors.gray,
    marginBottom: 20,
  },
});
