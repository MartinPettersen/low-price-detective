import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const ReturnButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={[styles.button, styles.shadow]}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.buttonText}>{"Tilbake"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    borderWidth: 2,
    marginTop: 50,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: "#343A40",
    borderColor: "#68C174",
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

export default ReturnButton;
