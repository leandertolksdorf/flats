import { tailwind } from "lib/tailwind";
import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const Screen = ({ scroll, ...props }: any) => {
  const headerHeight = useHeaderHeight();
  const Wrapper = scroll ? (
    <ScrollView style={tailwind("pt-4")} {...props} />
  ) : (
    <View style={tailwind("pt-4")} {...props} />
  );
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      style={tailwind("flex-1")}
      behavior="padding"
    >
      {Wrapper}
    </KeyboardAvoidingView>
  );
};

export default Screen;
