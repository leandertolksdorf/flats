import { Button, Input, Text } from "components";
import Padding from "components/Padding";
import {
  cityText,
  flatCityRequiredErrorText,
  flatNameRequiredErrorText,
  flatNameText,
  genericErrorText,
  saveText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import { HomeStackEditFlatScreenProps } from "navigation/Home";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import Screen from "../../../components/Screen";
import useStore from "../../../store";

type FormData = {
  name: string;
  city: string;
};

const EditFlat = ({ navigation }: HomeStackEditFlatScreenProps) => {
  const [flat, updateFlat] = useStore((state) => [
    state.flat,
    state.updateFlat,
  ]);

  const {
    control,
    handleSubmit,
    setError,
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
    } catch {
      Alert.alert(genericErrorText);
    }
  });

  const [name, setName] = useState(flat?.name);
  const [city, setCity] = useState(flat?.city);

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

export default EditFlat;
