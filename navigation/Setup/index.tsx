import { createStackNavigator } from "@react-navigation/stack";
import {
  signInScreenTitleText,
  signUpScreenTitleText,
  welcomeScreenTitleText,
} from "constants/strings";
import { StackNavigatorScreenOptions } from "lib/themes";
import React from "react";
import SetupSignIn from "screens/Setup/SetupSignIn";
import SetupSignUp from "screens/Setup/SetupSignUp";
import SetupAuth from "../../screens/Setup/SetupAuth";

const Stack = createStackNavigator();

const SetupStack = () => {
  return (
    <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
      <Stack.Screen
        name="auth"
        component={SetupAuth}
        options={{
          title: welcomeScreenTitleText,
        }}
      />
      <Stack.Screen
        name="signIn"
        component={SetupSignIn}
        options={{ title: signInScreenTitleText }}
      />
      <Stack.Screen
        name="signUp"
        component={SetupSignUp}
        options={{ title: signUpScreenTitleText }}
      />
    </Stack.Navigator>
  );
};

export default SetupStack;
