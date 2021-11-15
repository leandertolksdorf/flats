import { Button, Input } from "components";
import Padding from "components/Padding";
import {
  emailText,
  nameText,
  passwordText,
  signUpText,
} from "constants/strings";
import React from "react";
import Screen from "../../components/Screen";
import useStore from "../../store";

const SetupSignUp = ({ navigation }: { navigation: any }) => {
  const [setupForm, setSetupForm, signUp] = useStore((state) => [
    state.setupForm,
    state.setSetupForm,
    state.signUp,
  ]);
  return (
    <Screen>
      <Padding>
        <Input
          autoFocus
          label={nameText}
          value={setupForm.firstName}
          onChangeText={(text: string) => setSetupForm({ firstName: text })}
        />
        <Input
          label={emailText}
          autoCompleteType="email"
          autoCapitalize="none"
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
        <Button onPress={signUp}>{signUpText}</Button>
      </Padding>
    </Screen>
  );
};

export default SetupSignUp;
