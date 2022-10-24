import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flex: 1,
    width: "100%",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -26,
  },
  inputText: {
    color: "#f2f2f2",
    fontSize: 16,
    backgroundColor: "#262626",
    borderRadius: 6,

    padding: 16,
    flex: 1,
    marginRight: 4,
    height: 52,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1e6f9f",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f2f2f2",
  },
  summary: {
    marginTop: 32,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentSummary: {
    flexDirection: "row",
  },
  createdLabel: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  finishedLabel: {
    color: "#8284fa",
    fontSize: 14,
    fontWeight: "bold",
  },
  notification: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  textNotification: {
    color: "#d9d9d9",
    fontWeight: "bold",
    fontSize: 12,
  },
});
