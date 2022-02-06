import { CompositeScreenProps, useTheme } from "@react-navigation/native";
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
import FlatCreate from "../screens/FlatCreate";
import FlatEdit from "../screens/FlatEdit";
import ProfileEdit from "../screens/ProfileEdit";
import MainHome from "../screens/Home";
import FlatJoin from "../screens/FlatJoin";
import { NavigationTheme } from "../types/theme";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./RootTabs";

type HomeStackParamList = {
  Home: undefined;
  FlatCreate: undefined;
  FlatJoin: undefined;
  FlatEdit: undefined;
  ProfileEdit: undefined;
};

export type HomeStackNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, "HomeRoot">,
  StackScreenProps<HomeStackParamList>
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
