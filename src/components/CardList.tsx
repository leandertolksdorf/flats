import classNames from "classnames";
import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import Text from "./Text";

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
            classNames("bg-indigo-800", "rounded-full", "-mr-2", "px-3")
          )}
        >
          <Text
            style={tailwind(
              classNames("text-lg", "text-indigo-100", "font-bold")
            )}
          >
            {actionText}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tailwind("bg-indigo-100")}>
        {props.children.map((child: ReactNode, i: number) => (
          <View key={i} style={tailwind("relative")}>
            {i !== 0 && (
              <View
                style={tailwind(
                  classNames(
                    "w-full",
                    "ml-4",
                    "h-0",
                    "border-t",
                    "border-indigo-200"
                  )
                )}
              />
            )}
            {child}
          </View>
        ))}
      </View>
    </View>
  );
};

export default CardList;
