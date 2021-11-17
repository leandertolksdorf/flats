import { FontAwesome } from "@expo/vector-icons";
import Text from "components/Text";
import { tailwind } from "lib/tailwind";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const Card = ({ title, value, children, ...props }: any) => {
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
          borderBottomWidth: 0.25,
          ...tailwind("py-2 px-4 bg-primary-100 border-primary-400"),
        }}
        {...props}
      >
        <View style={tailwind("flex flex-row justify-between items-center")}>
          <Text style={tailwind("text-xl flex-none text-primary-500 mr-3")}>
            {title}
          </Text>
          <View style={tailwind("flex-1 items-end")}>{children}</View>
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
