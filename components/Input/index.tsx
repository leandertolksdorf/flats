import { AntDesign } from "@expo/vector-icons";
import Text from "components/Text";
import { getColor, tailwind } from "lib/tailwind";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Input = (props: any) => {
  const inputRef = useRef<TextInput>(null);

  const handleClearButtonPress = () => {
    if (props.onChangeText !== undefined) {
      props.onChangeText("");
      focus();
    }
  };
  const focus = () => inputRef.current?.focus();
  return (
    <View
      style={tailwind(
        "py-1 pl-3 mb-2 bg-primary-100 border-primary-800 border rounded flex-row"
      )}
    >
      <View style={tailwind("flex-1")}>
        <TouchableWithoutFeedback onPress={focus}>
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
      </View>
      <TouchableOpacity
        style={tailwind("justify-center px-3")}
        onPress={handleClearButtonPress}
      >
        <AntDesign
          name="closecircle"
          size={16}
          color={getColor("primary-300")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
