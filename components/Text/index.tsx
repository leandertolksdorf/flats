import React from "react";
import { Text as RNText } from "react-native";

const Text = (props: any) => {
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
