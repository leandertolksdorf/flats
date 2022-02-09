import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  createFlatScreenTitleText,
  editFlatScreenTitleText,
  editProfileScreenTitleText,
  homeScreenTitleText,
  joinFlatScreenTitleText,
} from "../constants/strings";
import FlatCreate from "../screens/FlatCreate";
import FlatEdit from "../screens/FlatEdit";
import FlatJoin from "../screens/FlatJoin";
import MainHome from "../screens/Home";
import ProfileEdit from "../screens/ProfileEdit";
import { HomeStackParamList } from "../types/navigation";
import { NavigationTheme } from "../types/theme";

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const tailwind = useTailwind();
  const { stackNavigatorScreenOptions } = useTheme() as NavigationTheme;
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Home"
        component={MainHome}
        options={{ title: homeScreenTitleText }}
      />
      <Stack.Screen
        name="FlatCreate"
        component={FlatCreate}
        options={{ title: createFlatScreenTitleText }}
      />
      <Stack.Screen
        name="FlatJoin"
        component={FlatJoin}
        options={{ title: joinFlatScreenTitleText }}
      />
      <Stack.Screen
        name="FlatEdit"
        component={FlatEdit}
        options={{ title: editFlatScreenTitleText }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{ title: editProfileScreenTitleText }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
