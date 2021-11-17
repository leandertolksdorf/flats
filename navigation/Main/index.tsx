import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { homeTabLabelText } from "constants/strings";
import { BottomTabNavigatorScreenOptions } from "lib/themes";
import HomeStack from "navigation/Home";
import React from "react";

export type MainTabParamList = {
  HomeTab: undefined;
};

export type MainTabHomeTabProps = BottomTabScreenProps<
  MainTabParamList,
  "HomeTab"
>;

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={BottomTabNavigatorScreenOptions}>
      <MainTab.Screen
        name="HomeTab"
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
