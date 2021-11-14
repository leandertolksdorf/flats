import { Button, Screen, Text } from "components";
import Padding from "components/Padding";
import {
  signInText,
  signUpText,
  welcomeHeadingText,
  welcomeSubheadingText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";

const SetupAuth = ({ navigation }: { navigation: any }) => {
  return (
    <Screen>
      <Padding>
        <Text style={tailwind("text-3xl font-bold")}>{welcomeHeadingText}</Text>
        <Text style={tailwind("text-3xl pb-3")}>{welcomeSubheadingText}</Text>
        <Button
          onPress={() => navigation.push("signIn")}
          buttonStyle={{ width: 200, marginBottom: 10 }}
        >
          {signInText}
        </Button>
        <Button
          text
          onPress={() => navigation.push("signUp")}
          buttonStyle={{ width: 200, marginBottom: 10 }}
        >
          {signUpText}
        </Button>
      </Padding>
    </Screen>
  );
};

export default SetupAuth;
