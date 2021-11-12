import React from "react";
import { StyleSheet, TextInput as RNTextInput } from "react-native";
import { tailwind } from "lib/tailwind";

const TextInput = (props: any) => {
  return (
    <RNTextInput
      {...props}
      //   style={{
      //     ...props.style,
      //     fontFamily: "BerlinType-Regular",
      //   }}
    ></RNTextInput>
  );
};

export default TextInput;
