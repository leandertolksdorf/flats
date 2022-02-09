import { FontAwesome5 } from "@expo/vector-icons";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import classNames from "classnames";
import { BlurView } from "expo-blur";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { homeTabLabelText, tasksTabLabelText } from "../constants/strings";
import { RootTabParamList } from "../types/navigation";
import HomeStack from "./HomeStack";
import TasksStack from "./TasksStack";

const MainTab = createBottomTabNavigator<RootTabParamList>();

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
            case "HomeRoot":
              iconName = "home";
              break;
            case "TasksRoot":
              iconName = "tasks";
              break;
          }
          return <FontAwesome5 name={iconName} color={color} size={size} />;
        },
        tabBarStyle: tailwind(classNames("bg-indigo-400/30", "border-0")),
      })}
    >
      <MainTab.Screen
        name="HomeRoot"
        component={HomeStack}
        options={{
          tabBarLabel: homeTabLabelText,
          headerTitle: homeTabLabelText,
        }}
      />
      <MainTab.Screen
        name="TasksRoot"
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
