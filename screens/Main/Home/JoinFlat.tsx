import { Button, Input, Text } from "components";
import Padding from "components/Padding";
import {
  flatCodeText,
  joinFlatHeadingText,
  joinFlatText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import { HomeStackJoinFlatScreenProps } from "navigation/Home";
import React, { useState } from "react";
import useStore from "store";
import Screen from "../../../components/Screen";

const JoinFlat = ({ navigation }: HomeStackJoinFlatScreenProps) => {
  const joinFlat = useStore((state: any) => state.joinFlat);
  const [shortcode, setShortcode] = useState("");

  const handleSubmit = () => {
    joinFlat(shortcode);
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <Padding>
        <Text style={tailwind("text-3xl font-bold pb-3")}>
          {joinFlatHeadingText}
        </Text>
        <Input
          label={flatCodeText}
          value={shortcode}
          autoCapitalize="characters"
          onChangeText={setShortcode}
        />
        <Button onPress={handleSubmit}>{joinFlatText}</Button>
      </Padding>
    </Screen>
  );
};

export default JoinFlat;
