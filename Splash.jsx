import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const SplashScreen = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.text, { transform: [{ scale: scaleValue }] }]}
      >
        API Hub!
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "black",
  },
  text: {
    fontSize: 42,
    color: "#b56afa",
    fontWeight: "bold",
  },
});
