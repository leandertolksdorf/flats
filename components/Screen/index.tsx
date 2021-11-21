import { useHeaderHeight } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { getColor, tailwind } from "lib/tailwind";
import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

const Screen = ({ scroll, hero, hiddenHero, children }: any) => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      style={tailwind("")}
      behavior={"height"}
    >
      <LinearGradient
        style={tailwind("w-full h-full")}
        // colors={[getColor("gray-900"), getColor("gray-800")]}
        colors={[getColor("primary-900"), getColor("primary-700")]}
        start={[0, 0]}
        end={[1, 0]}
      >
        {/* HERO */}
        {hero && <View style={tailwind("px-3 pb-2")}>{hero()}</View>}
        {/* CONTENT */}
        <View
          style={tailwind("bg-primary-200 rounded-3xl overflow-hidden flex-1")}
        >
          <ScrollView style={tailwind("pt-5 flex-1")}>{children}</ScrollView>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Screen;
