import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import {
  createFlatScreenTitleText,
  editFlatScreenTitleText,
  homeScreenTitleText,
  joinFlatScreenTitleText,
} from "constants/strings";
import { StackNavigatorScreenOptions } from "lib/themes";
import React from "react";
import CreateFlat from "screens/Main/Home/CreateFlat";
import EditFlat from "screens/Main/Home/EditFlat";
import MainHome from "screens/Main/Home/Home";
import JoinFlat from "screens/Main/Home/JoinFlat";

type HomeStackParamList = {
  Home: undefined;
  CreateFlat: undefined;
  JoinFlat: undefined;
  EditFlat: undefined;
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

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
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
    </Stack.Navigator>
  );
};

export default HomeStack;
