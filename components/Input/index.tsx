import Text from "components/Text";
import { getColor, tailwind } from "lib/tailwind";
import React, { useRef } from "react";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Input = (props: any) => {
  const inputRef = useRef<TextInput>(null);
  return (
    <TouchableWithoutFeedback
      onPress={() => inputRef.current?.focus()}
      style={tailwind(
        `py-1 px-3 mb-2 bg-primary-200 border-primary-800 border rounded`
      )}
    >
      <Text style={tailwind("text-sm font-bold text-primary-800")}>
        {props.label.toUpperCase()}
      </Text>
      <TextInput
        ref={inputRef}
        style={tailwind("text-2xl pb-1 font-medium text-primary-800")}
        placeholderTextColor={getColor("primary-400")}
        {...props}
      ></TextInput>
    </TouchableWithoutFeedback>
  );
};

export default Input;
