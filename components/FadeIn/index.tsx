import React, { useEffect, useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
} from "react-native";

const FadeIn = (props: any) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    fadeAnim.removeAllListeners();
  }, []);

  return (
    <Animated.View
      style={{
        // Bind opacity to animated value
        opacity: fadeAnim,
      }}
      {...props}
    />
  );
};

export default FadeIn;
