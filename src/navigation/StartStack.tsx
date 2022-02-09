import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  signInScreenTitleText,
  signUpScreenTitleText,
  welcomeScreenTitleText,
} from "../constants/strings";
import SetupSignIn from "../screens/SignIn";
import SetupSignUp from "../screens/SignUp";
import SetupAuth from "../screens/Start";
import { StartStackParamList } from "../types/navigation";
import { NavigationTheme } from "../types/theme";

const Stack = createStackNavigator<StartStackParamList>();

const SetupStack = () => {
  const { stackNavigatorScreenOptions } = useTheme() as NavigationTheme;
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Start"
        component={SetupAuth}
        options={{
          title: welcomeScreenTitleText,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SetupSignIn}
        options={{ title: signInScreenTitleText }}
      />
      <Stack.Screen
        name="SignUp"
        component={SetupSignUp}
        options={{ title: signUpScreenTitleText }}
      />
    </Stack.Navigator>
  );
};

export default SetupStack;
