import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import {
  createFlatScreenTitleText,
  editFlatScreenTitleText,
  editProfileScreenTitleText,
  homeScreenTitleText,
  joinFlatScreenTitleText,
} from "../../constants/strings";

import React from "react";
import CreateFlat from "../../screens/Main/Home/CreateFlat";
import EditFlat from "../../screens/Main/Home/EditFlat";
import EditProfile from "../../screens/Main/Home/EditProfile";
import MainHome from "../../screens/Main/Home/Home";
import JoinFlat from "../../screens/Main/Home/JoinFlat";
import tailwindConfig from "../../../tailwind.config";
import { useTailwind } from "tailwind-rn/dist";
import Text from "../../components/Text";
import classNames from "classnames";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { NavigationTheme } from "../../types/navigationTheme";

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
