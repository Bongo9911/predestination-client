import { StyleSheet, View } from "react-native";

export const globalStyles = StyleSheet.create({
  // start styles from StartScreen.js
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  titleSection: {
    flex: 1,
    width: "100%",
  },
  entrySection: {
    flex: 2,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    fontSize: 70,
    textAlign: "center",
  },
  joinButton: {
    paddingTop: 20,
    width: "50%",
  },
  createButton: {
    paddingTop: 15,
    width: "30%",
    textAlign: "center",
  },
  // end styles from StartScreen.js

  // start styles from SeekerGameScreen.js
  flexContainer: {
    flexDirection: "column",
    flex: 1,
  },
  header: {
    flex: 5,
    backgroundColor: "skyblue",
  },
  scrollable: {
    flex: 15,
  },
  scrollableNotes: {},
  progressSection: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  // end styles from SeekerGameScreen.js

  //added by Nathan Wang on Oct 5 11:50PM
  // start styles from KeeperGameScreen.js
  nextButton: {
    padding: 20,
    margin: 100,
    borderStyle: "dotted",
    borderWidth: 2,
    borderRadius: 10,
  },
  // end styles from KeeperGameScreen.
});
