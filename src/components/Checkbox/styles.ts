import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    width: 18,
    height: 18,
    borderWidth: 2,
    borderStyle: "solid",
    overflow: "hidden",
  },
  containerNoChecked: {
    borderColor: "#4ea8de",
    backgroundColor: "transparent",
  },
  containerChecked: {
    borderColor: "#5e60ce",
    backgroundColor: "#5e60ce",
  },
  mark: {
    borderLeftColor: "#f2f2f2",
    borderBottomColor: "#f2f2f2",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "-45deg" }],
    borderStyle: "solid",
    height: 6,
    width: 8,
    borderWidth: 1,
    position: "relative",
    top: -1,
  },
});
