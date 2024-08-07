import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      {/* Pets Images... */}
      <TouchableOpacity onPress={() => navigation.navigate("Pets Images")}>
        <Text style={styles.imagesText}>Pets Images</Text>
      </TouchableOpacity>

      {/* Random Jokes */}
      <TouchableOpacity onPress={() => navigation.navigate("Jokes")}>
        <Text style={styles.imagesText}>Random Jokes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.imagesText}>Coming soon..</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.imagesText}>Coming soon...</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.imagesText}>Coming soon....</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.imagesText}>Coming soon......</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  imagesText: {
    fontSize: 20,
    backgroundColor: "#c3a6fa",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
});
