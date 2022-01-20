import classNames from "classnames";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import Text from "../../components/Text";

const CardList = ({
  title,
  actionText,
  animated,
  onPressAction,
  ...props
}: any) => {
  const tailwind = useTailwind();

  const handleActionPress = () => {
    onPressAction();
  };
  return (
    <View style={tailwind(classNames("my-5"))}>
      <View style={tailwind("px-4 mb-1 flex-row justify-between items-center")}>
        {title && <Text style={tailwind("text-3xl font-bold")}>{title}</Text>}
        <TouchableOpacity
          onPress={handleActionPress}
          style={tailwind(
            classNames("bg-indigo-100", "rounded-lg", "-mr-2", "px-2")
          )}
        >
          <Text style={tailwind(classNames("text-lg", "text-indigo-900"))}>
            {actionText}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...tailwind(""),
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default CardList;
