import { tailwind } from "lib/tailwind";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props: any) => {
  return (
    <TouchableOpacity
      style={tailwind(
        `p-2 mb-2 ${!props.text ? "bg-primary-900" : ""} border-secondary-500 ${
          !props.text ? "border-b-4" : ""
        } rounded`
      )}
      {...props}
    >
      <Text
        style={{
          ...tailwind(`text-xl ${!props.text ? "text-white" : ""} text-center`),
          fontFamily: props.text ? "BerlinType-Regular" : "BerlinType-Bold",
          ...props.textStyle,
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
