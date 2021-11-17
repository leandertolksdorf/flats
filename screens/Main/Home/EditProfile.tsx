import { Button, Input, Text } from "components";
import Padding from "components/Padding";
import {
  flatNameRequiredErrorText,
  genericErrorText,
  nameText,
  saveSuccessText,
  saveText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import { HomeStackEditFlatScreenProps } from "navigation/Home";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { definitions } from "types/supabase";
import Screen from "../../../components/Screen";
import useStore from "../../../store";

type FormData = Partial<definitions["profiles"]>;

const EditProfile = ({ navigation }: HomeStackEditFlatScreenProps) => {
  const [profile, updateProfile, showSnackbar] = useStore((state) => [
    state.profile,
    state.updateProfile,
    state.showSnackbar,
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      first_name: profile?.first_name,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateProfile(data);
      showSnackbar({ message: saveSuccessText, type: "success" });
      navigation.navigate("Home");
    } catch {
      showSnackbar({ message: genericErrorText, type: "error" });
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
              label={nameText}
              value={value}
              autoCapitalize="words"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Button onPress={onSubmit}>{saveText}</Button>
        {errors.first_name?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {flatNameRequiredErrorText}
          </Text>
        )}
      </Padding>
    </Screen>
  );
};

export default EditProfile;
