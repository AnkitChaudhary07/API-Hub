import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Splash";
import Home from "./Home";
import PetsImages from "./InsideScreens/PetsImages";
import Jokes from "./InsideScreens/Jokes";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSplashActive, setIsSplashActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashActive(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {isSplashActive ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Pets Images"
            component={PetsImages}
            options={{
              headerRight: () => (
                <Button
                  onPress={() => alert("All Rights Reserved")}
                  title="Info"
                  color="#000000"
                />
              ),
            }}
          />
          <Stack.Screen name="Jokes" component={Jokes} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
