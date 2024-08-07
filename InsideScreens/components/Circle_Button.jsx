import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.pressed}>
      <Text style={styles.nextButton}>Next</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  nextButton: {
    width: 100,
    height: 100,
    fontSize: 20,
    backgroundColor: "#fc5a67",
    padding: 10,
    borderRadius: 100,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 70,
    borderWidth: 1,
    borderColor: "#000000",
  },
});
