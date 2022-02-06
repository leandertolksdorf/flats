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
  flatCodeText,
  invalidJoinShortcodeErrorText,
  joinFlatText,
  joinShortcodeRequiredErrorText,
  joinShortcodeValidatorErrorText,
} from "../constants/strings";
import { HomeStackJoinFlatScreenProps } from "../navigation/HomeStack";
import useStore from "../store";

type FormData = {
  shortcode: string;
};

const JoinFlat = ({ navigation }: HomeStackJoinFlatScreenProps) => {
  const tailwind = useTailwind();
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
