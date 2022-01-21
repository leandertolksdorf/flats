import classNames from "classnames";
import React, { ReactNode } from "react";
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
            classNames("bg-indigo-100", "rounded-full", "-mr-2", "px-3")
          )}
        >
          <Text
            style={tailwind(
              classNames("text-lg", "text-indigo-900", "font-bold")
            )}
          >
            {actionText}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...tailwind("bg-white"),
        }}
      >
        {props.children.map((child: ReactNode, i: number) => (
          <View key={i} style={tailwind("relative")}>
            {i !== 0 && (
              <View
                style={tailwind(
                  classNames(
                    "w-full",
                    "ml-4",
                    // "absolute",
                    // "right-0",
                    // "top-0",
                    "h-0",
                    "border-t",
                    "border-indigo-100"
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
