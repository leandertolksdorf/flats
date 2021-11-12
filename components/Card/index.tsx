import { FontAwesome } from "@expo/vector-icons";
import Text from "components/Text";
import { getColor, tailwind } from "lib/tailwind";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const Card = ({
  title,
  icon,
  value,
  editable,
  onEndEditing,
  onChangeText,
  ...props
}: any) => {
  const inputRef = useRef<TextInput>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <TouchableOpacity
        style={{
          borderWidth: 0.5,
          ...tailwind("py-2 px-4 bg-primary-200 border-primary-300"),
        }}
        onPress={editable ? handleFocus : null}
        {...props}
      >
        <View style={tailwind("flex flex-row justify-between items-center")}>
          <Text style={tailwind("text-xl flex-none text-primary-500 mr-3")}>
            {title}
          </Text>
          <View style={tailwind("flex-1")}>
            {editable ? (
              <TextInput
                ref={inputRef}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
                maxLength={24}
                style={{
                  ...tailwind("text-xl text-right"),
                  fontFamily: "BerlinType-Regular",
                }}
                value={value}
              />
            ) : (
              <Text style={tailwind("text-xl text-right")}>{value}</Text>
            )}
          </View>
          {icon ? (
            <View style={tailwind("flex-none ml-3")}>
              <FontAwesome
                name={icon}
                size={20}
                color={getColor("primary-400")}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
