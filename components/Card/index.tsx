import { FontAwesome } from "@expo/vector-icons";
import Text from "components/Text";
import { tailwind } from "lib/tailwind";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const Card = ({ title, value, ...props }: any) => {
  const inputRef = useRef<TextInput>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const Wrapper = (props: any) =>
    props.onPress ? <TouchableOpacity {...props} /> : <View {...props} />;

  return (
    <>
      <Wrapper
        style={{
          borderWidth: 0.25,
          ...tailwind("py-2 px-4 bg-white border-primary-300"),
        }}
        {...props}
      >
        <View style={tailwind("flex flex-row justify-between items-center")}>
          <Text style={tailwind("text-xl flex-none text-primary-500 mr-3")}>
            {title}
          </Text>
          <View style={tailwind("flex-1")}>
            <Text style={tailwind("text-xl text-right")}>{value}</Text>
          </View>
          {props.onPress ? (
            <View style={tailwind("flex-none ml-3")}>
              <FontAwesome name={"chevron-right"} size={12} />
            </View>
          ) : null}
        </View>
      </Wrapper>
    </>
  );
};

export default Card;
