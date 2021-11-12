import { Button, Input } from "components";
import Padding from "components/Padding";
import { emailText, passwordText, signInText } from "constants/strings";
import React from "react";
import Screen from "../../components/Screen";
import useStore from "../../store";

const SetupSignIn = ({ navigation }: { navigation: any }) => {
  const [setupForm, setSetupForm, signIn] = useStore((state) => [
    state.setupForm,
    state.setSetupForm,
    state.signIn,
  ]);

  return (
    <Screen>
      <Padding>
        {/* <Text style={tailwind("text-3xl font-bold")}>{signInHeadingText}</Text> */}
        {/* <Text style={tailwind("text-3xl pb-3")}>{signInSubheadingText}</Text> */}
        <Input
          label={emailText}
          autoCompleteType="email"
          autoCapitalize="none"
          autoFocus
          value={setupForm.email}
          onChangeText={(text: string) => setSetupForm({ email: text })}
        />
        <Input
          label={passwordText}
          secureTextEntry
          autoCapitalize="none"
          value={setupForm.password}
          onChangeText={(text: string) => setSetupForm({ password: text })}
        />
        <Button onPress={signIn}>{signInText}</Button>
      </Padding>
    </Screen>
  );
};

export default SetupSignIn;
