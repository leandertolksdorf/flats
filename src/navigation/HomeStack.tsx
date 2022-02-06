import { useTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  createFlatScreenTitleText,
  editFlatScreenTitleText,
  editProfileScreenTitleText,
  homeScreenTitleText,
  joinFlatScreenTitleText,
} from "../constants/strings";
import CreateFlat from "../screens/FlatCreate";
import EditFlat from "../screens/FlatEdit";
import EditProfile from "../screens/ProfileEdit";
import MainHome from "../screens/Home";
import JoinFlat from "../screens/FlatJoin";
import { NavigationTheme } from "../types/theme";

type HomeStackParamList = {
  Home: undefined;
  CreateFlat: undefined;
  JoinFlat: undefined;
  EditFlat: undefined;
  EditProfile: undefined;
};

export type HomeStackHomeScreenProps = StackScreenProps<
  HomeStackParamList,
  "Home"
>;
export type HomeStackCreateFlatScreenProps = StackScreenProps<
  HomeStackParamList,
  "CreateFlat"
>;
export type HomeStackJoinFlatScreenProps = StackScreenProps<
  HomeStackParamList,
  "JoinFlat"
>;
export type HomeStackEditFlatScreenProps = StackScreenProps<
  HomeStackParamList,
  "EditFlat"
>;
export type HomeStackEditProfileScreenProps = StackScreenProps<
  HomeStackParamList,
  "EditProfile"
>;

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
        name="CreateFlat"
        component={CreateFlat}
        options={{ title: createFlatScreenTitleText }}
      />
      <Stack.Screen
        name="JoinFlat"
        component={JoinFlat}
        options={{ title: joinFlatScreenTitleText }}
      />
      <Stack.Screen
        name="EditFlat"
        component={EditFlat}
        options={{ title: editFlatScreenTitleText }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: editProfileScreenTitleText }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;