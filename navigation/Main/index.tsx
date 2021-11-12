import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { homeTabLabelText } from "constants/strings";
import { BottomTabNavigatorScreenOptions } from "lib/themes";
import HomeStack from "navigation/Home";
import React from "react";

const MainTab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={BottomTabNavigatorScreenOptions}>
      <MainTab.Screen
        name="homeTab"
        component={HomeStack}
        options={{
          tabBarLabel: homeTabLabelText,
        }}
      />
      {/* <MainTab.Screen
        name="tasks"
        component={HomeStack}
        options={{ tabBarLabel: tasksTabLabelText }}
      />
      <MainTab.Screen
        name="finance"
        component={HomeStack}
        options={{ tabBarLabel: financeTabLabelText }}
      /> */}
    </MainTab.Navigator>
  );
};

export default MainNavigator;
