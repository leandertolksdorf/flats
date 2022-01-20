import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Padding = (props: any) => {
  const tailwind = useTailwind();
  return <View style={tailwind("px-4")} {...props}></View>;
};
export default Padding;
