import Constants from "expo-constants";
import * as React from "react";
import SnackBar from "react-native-snackbar-component";
import { useTailwind } from "tailwind-rn";
import useStore from "../../store";

const Snackbar = () => {
  const tailwind = useTailwind();
  const [snackbarVisible, snackbarMessage, snackbarType] = useStore((state) => [
    state.snackbarVisible,
    state.snackbarMessage,
    state.snackbarType,
  ]);
  const snackbarContainerStyles = {
    success: tailwind("text-green-500").color,
    warning: tailwind("text-yellow-500").color,
    error: tailwind("text-red-500").color,
    neutral: tailwind("text-white").color,
  };
  return (
    <SnackBar
      visible={snackbarVisible}
      position="top"
      autoHidingTime={2500}
      textMessage={snackbarMessage}
      top={Constants.statusBarHeight}
      backgroundColor={snackbarContainerStyles[snackbarType] as string}
      messageColor={tailwind("text-black").color as string}
    />
  );
};

export default Snackbar;
