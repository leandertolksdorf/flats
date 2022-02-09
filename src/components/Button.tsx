import classNames from "classnames";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";

const Button = (props: any) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      style={tailwind(
        classNames(
          "p-2",
          "mb-2",
          "rounded-lg",
          "overflow-hidden",
          !props.text && "bg-indigo-800"
        )
      )}
      {...props}
    >
      <Text
        style={{
          ...tailwind(
            classNames(
              props.sm ? "text-sm" : "text-xl",
              "text-indigo-100",
              "text-center"
            )
          ),
          fontFamily: props.text ? "BerlinType-Regular" : "BerlinType-Bold",
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
