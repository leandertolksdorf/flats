import { FontAwesome5 } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import {
  DefaultTheme,
  ParamListBase,
  RouteProp,
  Theme,
} from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
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
  headerTintColor: getColor("pink-500"),
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
      color={getColor("pink-500")}
      size={22}
      style={tailwind("mx-2")}
    />
  ),
};

export const BottomTabNavigatorScreenOptions: (props: {
  route: RouteProp<ParamListBase, string>;
}) => BottomTabNavigationOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: getColor("pink-600"),
  tabBarInactiveTintColor: getColor("primary-800"),
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
    const iconNames = {
      homeTab: "home",
      tasks: "tasks",
      finance: "money-bill-wave",
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
