import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Padding from "../components/Padding";
import Screen from "../components/Screen";
import { cityText, createFlatText, flatNameText } from "../constants/strings";
import { HomeStackCreateFlatScreenProps } from "../navigation/HomeStack";
import useStore from "../store";

const CreateFlat = ({ navigation }: HomeStackCreateFlatScreenProps) => {
  const [flatForm, setFlatForm, createFlat] = useStore((state) => [
    state.flatForm,
    state.setFlatForm,
    state.createFlat,
  ]);

  const handleSubmit = async () => {
    createFlat();
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <Padding>
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
