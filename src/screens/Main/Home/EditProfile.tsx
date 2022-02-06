import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTailwind } from "tailwind-rn/dist";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Padding from "../../../components/Padding";
import Screen from "../../../components/Screen";
import Text from "../../../components/Text";
import {
  flatNameRequiredErrorText,
  genericErrorText,
  nameText,
  saveSuccessText,
  saveText,
} from "../../../constants/strings";
import { HomeStackEditFlatScreenProps } from "../../../navigation/HomeStack";
import useStore from "../../../store";
import { definitions } from "../../../types/supabase";

type FormData = Partial<definitions["profiles"]>;

const EditProfile = ({ navigation }: HomeStackEditFlatScreenProps) => {
  const tailwind = useTailwind();
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
