import {
  BottomTabBar,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { homeTabLabelText, tasksTabLabelText } from "../constants/strings";

import HomeStack from "./Home";
import TasksStack from "./Tasks";
import React from "react";
import tailwindConfig from "../../tailwind.config";
import { useTailwind } from "tailwind-rn/dist";
import classNames from "classnames";

import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
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
      tabBar={(props) => (
        <BlurView
          style={tailwind(
            classNames("absolute", "bottom-0", "left-0", "right-0")
          )}
          tint="light"
          intensity={100}
        >
          <BottomTabBar {...props}></BottomTabBar>
        </BlurView>
      )}
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
        tabBarStyle: tailwind(classNames("bg-indigo-400/30", "border-0")),
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
