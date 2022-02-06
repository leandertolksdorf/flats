import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import AccountCard from "../components/AccountCard";
import Button from "../components/Button";
import FlatCard from "../components/FlatCard";
import Padding from "../components/Padding";
import Screen from "../components/Screen";
import Text from "../components/Text";
import { createFlatText, joinFlatText, noFlatText } from "../constants/strings";
import { HomeStackNavigationProps } from "../navigation/HomeStack";
import useStore from "../store";

const Home = ({ navigation }: HomeStackNavigationProps) => {
  console.log(navigation);
  const tailwind = useTailwind();
  const [profile, flat, signOut, updateFlat] = useStore((state: any) => [
    state.profile,
    state.flat,
    state.signOut,
    state.updateFlat,
  ]);

  return (
    <Screen scroll>
      {flat !== null ? (
        <FlatCard />
      ) : (
        <Padding>
          <Text style={tailwind("text-xl pb-3")}>{noFlatText}</Text>
          <Button onPress={() => navigation.push("FlatJoin")}>
            {joinFlatText}
          </Button>
          <Button onPress={() => navigation.push("FlatCreate")}>
            {createFlatText}
          </Button>
        </Padding>
      )}
      <AccountCard />
    </Screen>
  );
};

export default Home;
