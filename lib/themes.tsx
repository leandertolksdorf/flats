import { FontAwesome5 } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import {
  DefaultTheme,
  ParamListBase,
  RouteProp,
  Theme,
} from "@react-navigation/native";
import {
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { MainTabParamList } from "navigation/Main";
import React from "react";
import { getColor, tailwind } from "./tailwind";

export const NavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: getColor("primary-800"),
    card: getColor("primary-800"),
    text: getColor("white"),
  },
};

export const StackNavigatorScreenOptions: StackNavigationOptions = {
  headerTintColor: getColor("secondary-500"),
  headerTitleStyle: tailwind("text-xl text-white"),
  headerTitleAlign: "center",
  // headerShown: false,
  headerBackground: () => (
    <LinearGradient
      style={tailwind("w-full h-full")}
      colors={[getColor("primary-900"), getColor("primary-500")]}
      start={[0, 1]}
      end={[1, 0]}
    />
  ),
  headerBackTitleStyle: tailwind("text-xl"),
  headerBackTitle: "Zurück",
  // headerBackTitleVisible: false,
  headerBackImage: (tintColor) => (
    <FontAwesome5
      name="arrow-circle-left"
      color={getColor("secondary-500")}
      size={22}
      style={tailwind("mx-2")}
    />
  ),
  // cardOverlay: () => <View style={tailwind("flex-1 bg-black")} />,
  ...TransitionPresets.ModalPresentationIOS,
};

export const BottomTabNavigatorScreenOptions: (props: {
  route: RouteProp<ParamListBase, string>;
}) => BottomTabNavigationOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: getColor("secondary-500"),
  tabBarInactiveTintColor: getColor("primary-100"),
  tabBarStyle: tailwind("border-0"),
  tabBarBackground: () => (
    <LinearGradient
      style={tailwind("w-full h-full")}
      colors={[getColor("primary-900"), getColor("primary-500")]}
      start={[0, 0]}
      end={[1, 0]}
    />
  ),
  tabBarIcon: ({ focused, color, size }) => {
    const iconNames: { [Property in keyof MainTabParamList]: string } = {
      HomeTab: "home",
      TasksTab: "tasks",
    };
    return (
      <FontAwesome5
        name={(iconNames as any)[route.name]}
        size={size}
        color={color}
      />
    );
  },
});
