import { tailwind } from "lib/tailwind";
import { View } from "react-native";
import React from "react";
const Padding = (props: any) => (
  <View style={tailwind("px-4")} {...props}></View>
);
export default Padding;
