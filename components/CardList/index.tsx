import Text from "components/Text";
import { tailwind } from "lib/tailwind";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const CardList = ({
  title,
  actionText,
  animated,
  onPressAction,
  ...props
}: any) => {
  const handleActionPress = () => {
    onPressAction();
  };
  return (
    <View style={tailwind(`my-2`)}>
      <View style={tailwind("px-4 flex-row justify-between items-end")}>
        {title && (
          <Text style={tailwind("py-2 text-xl text-primary-800 font-bold")}>
            {title}
          </Text>
        )}
        <TouchableOpacity onPress={handleActionPress}>
          <Text style={tailwind("py-2 text-xl text-primary-500")}>
            {actionText}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth: 0.25,
          ...tailwind("border-primary-400"),
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default CardList;
