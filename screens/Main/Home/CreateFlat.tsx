import { Button, Input, Text } from "components";
import Padding from "components/Padding";
import {
  cityText,
  createFlatHeadingText,
  createFlatText,
  flatNameText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";
import Screen from "../../../components/Screen";
import useStore from "../../../store";

const CreateFlat = ({ navigation }: { navigation: any }) => {
  const [flatForm, setFlatForm, createFlat] = useStore((state) => [
    state.flatForm,
    state.setFlatForm,
    state.createFlat,
  ]);

  const handleSubmit = async () => {
    createFlat();
    navigation.navigate("home");
  };

  return (
    <Screen>
      <Padding>
        <Text style={tailwind("text-3xl font-bold pb-3")}>
          {createFlatHeadingText}
        </Text>
        <Input
          label={flatNameText}
          value={flatForm.flatName}
          autoCapitalize="words"
          onChangeText={(text: string) => setFlatForm({ flatName: text })}
        />
        <Input
          label={cityText}
          value={flatForm.flatCity}
          autoCapitalize="words"
          onChangeText={(text: string) => setFlatForm({ flatCity: text })}
        />
        <Button onPress={handleSubmit}>{createFlatText}</Button>
      </Padding>
    </Screen>
  );
};

export default CreateFlat;
