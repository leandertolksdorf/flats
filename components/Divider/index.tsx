import React from "react";
import { Text as RNText, View } from "react-native";
import { tailwind } from "lib/tailwind";

const Divider = ({ lg }: { lg: boolean }) => {
  return (
    <View
      style={{
        height: 1,
        ...tailwind(`${lg ? "my-4" : "my-2"} w-full bg-primary-400 rounded`),
      }}
    />
  );
};

export default Divider;
