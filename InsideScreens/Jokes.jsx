import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "./components/Title";
import CustomButton from "./components/Circle_Button";

const Jokes = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getJokes = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getJokes();
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Title text={"Jokes"} />
        <Text style={styles.errorText}>Error fetching data</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title text={"Jokes"} />
      <Text style={styles.typeText}>Type: {data.type}</Text>
      <Text style={styles.jokeText}>
        {"-> "}
        {data.setup} {"\n"} {"\n"}
        {"- "} {data.punchline}
      </Text>

      <CustomButton pressed={getJokes} />
    </SafeAreaView>
  );
};

export default Jokes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  typeText: {
    margin: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  jokeText: {
    fontSize: 20,
    textAlign: "center",
  },
});
