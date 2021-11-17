import { Button, Input, Text } from "components";
import Padding from "components/Padding";
import {
  flatCodeText,
  invalidJoinShortcodeErrorText,
  joinFlatText,
  joinShortcodeRequiredErrorText,
  joinShortcodeValidatorErrorText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import { HomeStackJoinFlatScreenProps } from "navigation/Home";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useStore from "store";
import validator from "validator";
import Screen from "../../../components/Screen";

type FormData = {
  shortcode: string;
};

const JoinFlat = ({ navigation }: HomeStackJoinFlatScreenProps) => {
  const [joinFlat, showSnackbar] = useStore((state: any) => [
    state.joinFlat,
    state.showSnackbar,
  ]);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      shortcode: "",
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await joinFlat(data.shortcode);
      navigation.navigate("Home");
    } catch {
      showSnackbar({
        message: invalidJoinShortcodeErrorText,
        type: "error",
      });
    }
  });

  return (
    <Screen>
      <Padding>
        <Controller
          name="shortcode"
          control={control}
          rules={{
            required: true,
            validate: (value: string) =>
              validator.isLength(value, { min: 6, max: 6 }),
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={flatCodeText}
              autoCapitalize="characters"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Button onPress={onSubmit}>{joinFlatText}</Button>
        {errors.shortcode?.type === "validate" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {joinShortcodeValidatorErrorText}
          </Text>
        )}
        {errors.shortcode?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {joinShortcodeRequiredErrorText}
          </Text>
        )}
      </Padding>
    </Screen>
  );
};

export default JoinFlat;
