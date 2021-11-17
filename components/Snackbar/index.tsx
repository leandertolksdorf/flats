import Constants from "expo-constants";
import { getColor } from "lib/tailwind";
import * as React from "react";
import SnackBar from "react-native-snackbar-component";
import useStore from "store";

const Snackbar = () => {
  const [snackbarVisible, snackbarMessage, snackbarType] = useStore((state) => [
    state.snackbarVisible,
    state.snackbarMessage,
    state.snackbarType,
  ]);
  const snackbarContainerStyles = {
    success: getColor("green-500"),
    warning: getColor("yellow-500"),
    error: getColor("red-500"),
    neutral: getColor("white"),
  };
  return (
    <SnackBar
      visible={snackbarVisible}
      position="top"
      autoHidingTime={2500}
      textMessage={snackbarMessage}
      top={Constants.statusBarHeight}
      backgroundColor={snackbarContainerStyles[snackbarType]}
      messageColor={getColor("black")}
    />
  );
};

export default Snackbar;
