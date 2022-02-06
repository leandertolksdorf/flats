import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import Button from "../components/Button";
import Padding from "../components/Padding";
import Screen from "../components/Screen";
import Text from "../components/Text";
import {
  signInText,
  signUpText,
  welcomeHeadingText,
  welcomeSubheadingText,
} from "../constants/strings";
import { StartStackScreenProps } from "../navigation/StartStack";

const SetupAuth = ({ navigation }: StartStackScreenProps) => {
  const tailwind = useTailwind();
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
