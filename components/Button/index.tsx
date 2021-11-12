import { tailwind } from "lib/tailwind";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props: any) => {
  return (
    <TouchableOpacity
      style={tailwind(
        `p-2 mb-2 ${!props.text ? "bg-primary-900" : ""} rounded`
      )}
      {...props}
    >
      <Text
        style={{
          ...tailwind(`text-xl ${!props.text ? "text-white" : ""} text-center`),
          fontFamily: props.text ? "BerlinType-Regular" : "BerlinType-Bold",
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
