import { LinearGradient } from "expo-linear-gradient";
import { getColor, tailwind } from "lib/tailwind";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props: any) => {
  return (
    <TouchableOpacity
      style={tailwind(
        `p-2 mb-2 ${!props.text ? "" : ""} border-secondary-500 ${
          !props.text ? "" : ""
        } rounded-lg overflow-hidden`
      )}
      {...props}
    >
      {!props.text && (
        <LinearGradient
          style={tailwind("absolute inset-0")}
          colors={[getColor("primary-900"), getColor("primary-700")]}
          start={[0, 1]}
          end={[1, 0]}
        />
      )}
      <Text
        style={{
          ...tailwind(`text-xl ${!props.text ? "text-white" : ""} text-center`),
          fontFamily: props.text ? "BerlinType-Regular" : "BerlinType-Bold",
          // ...props.textStyle,
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
