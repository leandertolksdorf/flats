import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { homeTabLabelText } from "constants/strings";
import { BottomTabNavigatorScreenOptions } from "lib/themes";
import HomeStack from "navigation/Home";
import React from "react";

type MainTabParamList = {
  Home: undefined;
};

export type MainTabHomeProps = BottomTabScreenProps<MainTabParamList, "Home">;

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={BottomTabNavigatorScreenOptions}>
      <MainTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: homeTabLabelText,
          headerTitle: homeTabLabelText,
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
