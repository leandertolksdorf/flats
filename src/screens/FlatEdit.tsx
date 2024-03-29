import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import Padding from "../components/Padding";
import Screen from "../components/Screen";
import {
  cityText,
  flatCityRequiredErrorText,
  flatNameRequiredErrorText,
  flatNameText,
  genericErrorText,
  leaveFlatConfirmationText,
  leaveFlatText,
  noText,
  saveSuccessText,
  saveText,
  yesText,
} from "../constants/strings";
import { HomeStackNavigationProps } from "../navigation/HomeStack";
import useStore from "../store";
import { definitions } from "../types/supabase";

type FormData = Partial<definitions["flats"]>;

const FlatEdit = ({ navigation }: HomeStackNavigationProps) => {
  const tailwind = useTailwind();
  const [flat, updateFlat, updateProfile, showSnackbar] = useStore((state) => [
    state.flat,
    state.updateFlat,
    state.updateProfile,
    state.showSnackbar,
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: flat?.name,
      city: flat?.city,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateFlat(data);
      navigation.navigate("Home");
      showSnackbar({
        message: saveSuccessText,
        type: "success",
      });
    } catch {
      showSnackbar({ message: genericErrorText, type: "error" });
    }
  });

  const handleLeaveFlat = () => {
    Alert.alert(leaveFlatText, leaveFlatConfirmationText(flat?.name), [
      {
        text: yesText,
        onPress: () => {
          updateProfile({
            flat_id: null,
          });
          navigation.navigate("Home");
        },
      },
      {
        text: noText,
      },
    ]);
  };

  return (
    <Screen>
      <Padding>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={flatNameText}
              value={value}
              autoCapitalize="words"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={cityText}
              value={value}
              autoCapitalize="words"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Button onPress={onSubmit}>{saveText}</Button>
        <Button text onPress={handleLeaveFlat}>
          {leaveFlatText}
        </Button>
        {errors.name?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {flatNameRequiredErrorText}
          </Text>
        )}
        {errors.city?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {flatCityRequiredErrorText}
          </Text>
        )}
      </Padding>
    </Screen>
  );
};

export default FlatEdit;
