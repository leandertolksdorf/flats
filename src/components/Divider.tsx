import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Divider = ({ lg }: { lg: boolean }) => {
  const tailwind = useTailwind();

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
