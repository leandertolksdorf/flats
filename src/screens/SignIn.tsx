import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTailwind } from "tailwind-rn/dist";
import validator from "validator";
import Button from "../components/Button";
import Input from "../components/Input";
import Padding from "../components/Padding";
import Screen from "../components/Screen";
import Text from "../components/Text";
import {
  emailRequiredErrorText,
  emailText,
  invalidCredentialsErrorText,
  invalidEmailErrorText,
  passwordRequiredErrorText,
  passwordText,
  signInText,
} from "../constants/strings";
import { SetupStackSignInScreenProps } from "../navigation/StartStack";
import useStore from "../store";

type FormData = {
  email: string;
  password: string;
};

const SetupSignIn = ({ navigation }: SetupStackSignInScreenProps) => {
  const tailwind = useTailwind();
  const [signIn, showSnackbar] = useStore((state) => [
    state.signIn,
    state.showSnackbar,
  ]);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn(data);
    } catch {
      showSnackbar({
        message: invalidCredentialsErrorText,
        type: "error",
      });
    }
  });

  return (
    <Screen>
      <Padding>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            validate: validator.isEmail,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={emailText}
              autoCompleteType="email"
              autoCapitalize="none"
              autoFocus
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={passwordText}
              secureTextEntry
              autoCapitalize="none"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Button onPress={onSubmit}>{signInText}</Button>
        {errors.email?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {emailRequiredErrorText}
          </Text>
        )}
        {errors.email?.type === "validate" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {invalidEmailErrorText}
          </Text>
        )}
        {errors.email?.type === "invalidCredentials" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {invalidCredentialsErrorText}
          </Text>
        )}
        {errors.password?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {passwordRequiredErrorText}
          </Text>
        )}
      </Padding>
    </Screen>
  );
};

export default SetupSignIn;
