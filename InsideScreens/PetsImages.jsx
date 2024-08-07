import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "./components/Title";
import CustomButton from "./components/Circle_Button";

const PetsImages = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const getAPIImage = async () => {
    setLoading(true);
    const url = "https://dog.ceo/api/breeds/image/random";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    getAPIImage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Title text={"Pets Images"} />
      {loading ? (
        <ActivityIndicator size={"large"} color={"#0000ff"} />
      ) : (
        data && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: data.message }} style={styles.image} />
          </View>
        )
      )}

      <CustomButton pressed={getAPIImage} />
    </SafeAreaView>
  );
};

export default PetsImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
});
