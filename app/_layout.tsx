import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import "./global.css";
const RootLayout = () => {
  useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });
  return <Slot />;
};

export default RootLayout;
