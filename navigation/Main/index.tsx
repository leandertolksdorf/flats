import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { homeTabLabelText, tasksTabLabelText } from "constants/strings";
import { BottomTabNavigatorScreenOptions } from "lib/themes";
import HomeStack from "navigation/Home";
import TasksStack from "navigation/Tasks";
import React from "react";

export type MainTabParamList = {
  HomeTab: undefined;
  TasksTab: undefined;
};

export type MainTabHomeTabProps = BottomTabScreenProps<
  MainTabParamList,
  "HomeTab"
>;

export type MainTabTasksTabProps = BottomTabScreenProps<
  MainTabParamList,
  "TasksTab"
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
      <MainTab.Screen
        name="TasksTab"
        component={TasksStack}
        options={{
          tabBarLabel: tasksTabLabelText,
          headerTitle: tasksTabLabelText,
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
