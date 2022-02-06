import React from "react";
import { Text as RNText } from "react-native";
import { useTailwind } from "tailwind-rn";

const Text = (props: any) => {
  const tailwind = useTailwind();
  return (
    <RNText
      {...props}
      style={{
        ...props.style,
        fontFamily:
          props.style?.fontWeight !== "700"
            ? "BerlinType-Regular"
            : "BerlinType-Bold",
        fontWeight: null,
      }}
    ></RNText>
  );
};

export default Text;
