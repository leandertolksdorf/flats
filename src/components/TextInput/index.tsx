import React from "react";
import { TextInput as RNTextInput } from "react-native";
import { useTailwind } from "tailwind-rn";

const TextInput = (props: any) => {
  const tailwind = useTailwind();
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
