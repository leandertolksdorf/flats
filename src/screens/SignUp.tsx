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
  genericErrorText,
  invalidEmailErrorText,
  invalidPasswordConfirmationErrorText,
  nameRequiredErrorText,
  nameText,
  passwordConfirmationRequiredErrorText,
  passwordConfirmationText,
  passwordRequiredErrorText,
  passwordText,
  signUpText,
} from "../constants/strings";
import { SetupStackSignUpScreenProps } from "../navigation/StartStack";
import useStore from "../store";

type FormData = {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
};
const SetupSignUp = ({ navigation }: SetupStackSignUpScreenProps) => {
  const tailwind = useTailwind();
  const [signUp, showSnackbar] = useStore((state) => [
    state.signUp,
    state.showSnackbar,
  ]);

  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp(data);
    } catch (e) {
      showSnackbar({
        message: genericErrorText,
        type: "error",
      });
    }
  });

  return (
    <Screen>
      <Padding>
        <Controller
          name="first_name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoFocus
              label={nameText}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />

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
            validate: (value) => validator.isLength(value, { min: 7 }),
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
        <Controller
          name="password_confirmation"
          control={control}
          rules={{
            required: true,
            validate: (value) => value === getValues().password,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={passwordConfirmationText}
              secureTextEntry
              autoCapitalize="none"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Button onPress={onSubmit}>{signUpText}</Button>
        {errors.first_name?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {nameRequiredErrorText}
          </Text>
        )}
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
        {errors.password?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {passwordRequiredErrorText}
          </Text>
        )}
        {errors.password_confirmation?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {passwordConfirmationRequiredErrorText}
          </Text>
        )}
        {errors.password_confirmation?.type === "validate" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {invalidPasswordConfirmationErrorText}
          </Text>
        )}
      </Padding>
    </Screen>
  );
};

export default SetupSignUp;
