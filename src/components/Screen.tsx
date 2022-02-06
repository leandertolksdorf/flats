import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Screen = ({ scroll, hero, hiddenHero, children }: any) => {
  const headerHeight = useHeaderHeight();
  const tailwind = useTailwind();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      style={tailwind("")}
      behavior={"height"}
    >
      <View style={tailwind("w-full h-full")}>
        <ScrollView style={tailwind("flex-1 mb-24")}>{children}</ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Screen;
