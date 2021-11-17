import { Button, Screen, Text } from "components";
import Padding from "components/Padding";
import {
  signInText,
  signUpText,
  welcomeHeadingText,
  welcomeSubheadingText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import { SetupStackStartScreenProps } from "navigation/Setup";
import React from "react";

const SetupAuth = ({ navigation }: SetupStackStartScreenProps) => {
  return (
    <Screen>
      <Padding>
        <Text style={tailwind("text-3xl font-bold")}>{welcomeHeadingText}</Text>
        <Text style={tailwind("text-3xl pb-3")}>{welcomeSubheadingText}</Text>
        <Button
          onPress={() => navigation.push("SignIn")}
          buttonStyle={{ width: 200, marginBottom: 10 }}
        >
          {signInText}
        </Button>
        <Button
          text
          onPress={() => navigation.push("SignUp")}
          buttonStyle={{ width: 200, marginBottom: 10 }}
        >
          {signUpText}
        </Button>
      </Padding>
    </Screen>
  );
};

export default SetupAuth;
