import { AntDesign } from "@expo/vector-icons";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import Text from "../../components/Text";

const Input = (props: any) => {
  const tailwind = useTailwind();
  const inputRef = useRef<TextInput>(null);

  const handleClearButtonPress = () => {
    if (props.onChangeText !== undefined) {
      props.onChangeText("");
      focus();
    }
  };
  const focus = () => inputRef.current?.focus();
  return (
    <View style={tailwind("py-1 pl-3 mb-2 bg-white rounded-lg flex-row")}>
      <View style={tailwind("flex-1")}>
        <TouchableWithoutFeedback onPress={focus}>
          <Text style={tailwind("text-sm font-bold text-indigo-700")}>
            {props.label.toUpperCase()}
          </Text>
          <TextInput
            ref={inputRef}
            style={tailwind("text-2xl pb-1 font-medium text-black")}
            placeholderTextColor={tailwind("text-black").color}
            autoCorrect={false}
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
          color={tailwind("text-black/25").color as string}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
