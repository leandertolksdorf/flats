import { useHeaderHeight } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { getColor, tailwind } from "lib/tailwind";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const Screen = ({ scroll, hero, hiddenHero, children }: any) => {
  const headerHeight = useHeaderHeight();
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      style={tailwind("")}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        style={tailwind("w-full h-full")}
        colors={[getColor("primary-900"), getColor("primary-500")]}
        start={[0, 0]}
        end={[1, 0]}
      >
        {/* HERO */}
        <View style={tailwind("px-3 pb-2")}>{hero && hero()}</View>
        {/* CONTENT */}
        <View
          style={tailwind(
            "bg-primary-300 rounded-t-2xl overflow-hidden flex-1"
          )}
        >
          <ScrollView style={tailwind("flex-1")}>{children}</ScrollView>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Screen;
