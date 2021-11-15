import { Button, Input, Text } from "components";
import Padding from "components/Padding";
import {
  emailRequiredErrorText,
  emailText,
  invalidCredentialsErrorText,
  invalidEmailErrorText,
  passwordRequiredErrorText,
  passwordText,
  signInText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import Screen from "../../components/Screen";
import useStore from "../../store";

type FormData = {
  email: string;
  password: string;
};

const SetupSignIn = ({ navigation }: { navigation: any }) => {
  const signIn = useStore((state) => state.signIn);

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
      setError("email", {
        type: "invalidCredentials",
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
