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
        {/* HERO */}
        {hero && <View style={tailwind("px-3 pb-2")}>{hero()}</View>}
        {/* CONTENT */}
        <View style={tailwind("flex-1")}>
          <ScrollView style={tailwind("pt-5 flex-1")}>{children}</ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Screen;
