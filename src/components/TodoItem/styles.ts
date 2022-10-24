import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: "#262626",
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  clickableContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 19.6,
    marginLeft: 8,
  },
  textNoChecked: {
    color: "#f2f2f2",
  },
  textChecked: {
    color: "#808080",
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: "#808080",
  },
  trashContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 18,
  },
});
