import { FontAwesome } from "@expo/vector-icons";
import classNames from "classnames";
import React, { useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import Text from "./Text";

const Card = ({ title, value, children, ...props }: any) => {
  const tailwind = useTailwind();
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
          ...tailwind("py-2 bg-white"),
        }}
        {...props}
      >
        <View
          style={tailwind(
            classNames(
              "flex",
              "flex-row",
              "flex-wrap",
              "justify-between",
              "items-center"
            )
          )}
        >
          <Text style={tailwind("text-xl font-bold flex-none text-black mx-4")}>
            {title}
          </Text>
          <View
            style={tailwind(`flex-1 items-end ${props.onPress ? "" : "mx-4"}`)}
          >
            {children}
          </View>
          {props.onPress ? (
            <View style={tailwind("flex-row w-4 justify-center items-center")}>
              <FontAwesome name={"chevron-right"} size={10} />
            </View>
          ) : null}
        </View>
      </Wrapper>
    </>
  );
};

export default Card;
