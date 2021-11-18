import { tailwind } from "lib/tailwind";
import * as React from "react";
import { ImageBackground, View } from "react-native";
import splash from "../../assets/splash.png";

const LoadingScreen = () => (
  <View style={tailwind("w-full h-full")}>
    <ImageBackground
      source={splash}
      style={tailwind("w-full h-full")}
    ></ImageBackground>
  </View>
);

export default LoadingScreen;
