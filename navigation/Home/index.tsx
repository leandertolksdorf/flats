import { createStackNavigator } from "@react-navigation/stack";
import {
  createFlatScreenTitleText,
  flatmatesText,
  homeScreenTitleText,
  joinFlatScreenTitleText,
} from "constants/strings";
import { StackNavigatorScreenOptions } from "lib/themes";
import React from "react";
import CreateFlat from "screens/Main/Home/CreateFlat";
import FlatMates from "screens/Main/Home/FlatMates";
import MainHome from "screens/Main/Home/Home";
import JoinFlat from "screens/Main/Home/JoinFlat";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
      <Stack.Screen
        name="home"
        component={MainHome}
        options={{ title: homeScreenTitleText }}
      />
      <Stack.Screen
        name="createFlat"
        component={CreateFlat}
        options={{ title: createFlatScreenTitleText }}
      />
      <Stack.Screen
        name="joinFlat"
        component={JoinFlat}
        options={{ title: joinFlatScreenTitleText }}
      />
      <Stack.Screen
        name="flatMates"
        component={FlatMates}
        options={{ title: flatmatesText }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
