import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    buttonText: string,
    action: () => void
}

const ScanButton = ({buttonText, action}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => action()}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    marginTop: 50,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: "#343A40",
    borderColor: "#68C174",
  },
  buttonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScanButton;
