import React, { useEffect, useRef, useState } from "react";
import Text from "components/Text";
import { tailwind } from "lib/tailwind";
import { Animated, Easing, View } from "react-native";
import useStore from "store";

const Snackbar = () => {
  const message = useStore((state: any) => state.snackbarMessage);
  useEffect(() => {
    const unsubscribeToSnackbarVisible = useStore.subscribe(
      (state: any) => state.snackbarVisible,
      (state) => {
        state.snackbarVisible ? fadeIn() : fadeOut();
      }
    );
    return () => unsubscribeToSnackbarVisible();
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fadeAnimValue, setFadeAnimValue] = useState(0);

  fadeAnim.addListener(({ value }) => setFadeAnimValue(value));

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        ...tailwind(
          `${fadeAnimValue === 0 ? "hidden" : "flex"} absolute bottom-14 w-full`
        ),
      }}
    >
      <View style={tailwind("p-2 mx-2 bg-green-500 rounded flex-grow")}>
        <Text style={tailwind("text-xl font-bold text-center text-white")}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Snackbar;
