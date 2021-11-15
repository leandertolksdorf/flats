import Text from "components/Text";
import { getColor, tailwind } from "lib/tailwind";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

const Input = (props: any) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={tailwind(
        `py-1 px-3 mb-2 bg-primary-200 border-primary-800 border rounded`
      )}
    >
      <Text style={tailwind("text-sm font-bold text-primary-800")}>
        {props.label.toUpperCase()}
      </Text>
      <TextInput
        onFocus={() => setIsFocus(true)}
        // onBlur={() => {
        //   setIsFocus(false);
        // }}
        style={tailwind("text-2xl pb-1 font-medium text-primary-800")}
        placeholderTextColor={getColor("primary-400")}
        {...props}
      ></TextInput>
    </View>
  );
};

export default Input;
