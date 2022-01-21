import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { homeTabLabelText, tasksTabLabelText } from "../../constants/strings";

import HomeStack from "../../navigation/Home";
import TasksStack from "../../navigation/Tasks";
import React from "react";
import tailwindConfig from "../../../tailwind.config";
import { useTailwind } from "tailwind-rn/dist";
import classNames from "classnames";

import { FontAwesome5 } from "@expo/vector-icons";
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
  const tailwind = useTailwind();
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          switch (route.name) {
            case "HomeTab":
              iconName = "home";
              break;
            case "TasksTab":
              iconName = "tasks";
              break;
          }
          return <FontAwesome5 name={iconName} color={color} size={size} />;
        },
      })}
    >
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
