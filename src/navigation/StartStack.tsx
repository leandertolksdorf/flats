import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import {
  signInScreenTitleText,
  signUpScreenTitleText,
  welcomeScreenTitleText,
} from "../constants/strings";
import React from "react";
import SetupAuth from "../screens/Setup/SetupStart";
import SetupSignIn from "../screens/Setup/SetupSignIn";
import SetupSignUp from "../screens/Setup/SetupSignUp";
import { useTheme } from "@react-navigation/native";
import { NavigationTheme } from "../types/theme";

type SetupStackParamList = {
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type SetupStackStartScreenProps = StackScreenProps<
  SetupStackParamList,
  "Start"
>;
export type SetupStackSignInScreenProps = StackScreenProps<
  SetupStackParamList,
  "SignIn"
>;
export type SetupStackSignUpScreenProps = StackScreenProps<
  SetupStackParamList,
  "SignUp"
>;

const Stack = createStackNavigator<SetupStackParamList>();

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
