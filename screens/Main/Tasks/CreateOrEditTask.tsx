import { Picker } from "@react-native-picker/picker";
import Button from "components/Button";
import Input from "components/Input";
import Padding from "components/Padding";
import Screen from "components/Screen";
import Text from "components/Text";
import { nameText, saveText } from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import useStore from "store";

type FormData = {
  name: string;
  frequency: number;
  interval: "daily" | "weekly" | "monthly";
};

const CreateOrEditTask = () => {
  const [showSnackbar] = useStore((state) => [state.showSnackbar]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      frequency: 1,
      interval: "weekly",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    // try {
    //   await updateProfile(data);
    //   showSnackbar({ message: saveSuccessText, type: "success" });
    //   navigation.navigate("Home");
    // } catch {
    //   showSnackbar({ message: genericErrorText, type: "error" });
    // }
  });

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
              label={nameText}
              value={value}
              autoCapitalize="sentences"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <View style={tailwind("flex-row items-center")}>
          <Text style={tailwind("text-2xl mr-3")}>Alle</Text>
          <Controller
            name="frequency"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
                style={tailwind("flex-1")}
              >
                {Array.from(Array(14).keys()).map((i) => (
                  <Picker.Item value={i + 1} label={(i + 1).toString()} />
                ))}
              </Picker>
            )}
          />
          <Controller
            name="interval"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
                style={tailwind("flex-1")}
              >
                <Picker.Item value={"daily"} label={"Tag/e"} />
                <Picker.Item value={"weekly"} label={"Woche/n"} />
                <Picker.Item value={"monthly"} label={"Monat/e"} />
              </Picker>
            )}
          />
        </View>
        <Button onPress={onSubmit}>{saveText}</Button>
        {/* {errors.first_name?.type === "required" && (
          <Text style={tailwind("text-red-800 font-bold text-center")}>
            {flatNameRequiredErrorText}
          </Text>
        )} */}
      </Padding>
    </Screen>
  );
};

export default CreateOrEditTask;
