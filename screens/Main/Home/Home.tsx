import AccountCard from "components/AccountCard";
import Button from "components/Button";
import FlatCard from "components/FlatCard";
import Header from "components/Header";
import Padding from "components/Padding";
import Text from "components/Text";
import { createFlatText, joinFlatText, noFlatText } from "constants/strings";
import { tailwind } from "lib/tailwind";
import { HomeStackHomeScreenProps } from "navigation/Home";
import React from "react";
import useStore from "store";
import Screen from "../../../components/Screen";

const Home = ({ navigation }: HomeStackHomeScreenProps) => {
  const [profile, flat, signOut, updateFlat] = useStore((state: any) => [
    state.profile,
    state.flat,
    state.signOut,
    state.updateFlat,
  ]);

  console.log("FLAT ", flat);

  return (
    <Screen scroll hero={() => <Header />}>
      {flat !== null ? (
        <FlatCard />
      ) : (
        <Padding>
          <Text style={tailwind("text-xl pb-3")}>{noFlatText}</Text>
          <Button onPress={() => navigation.push("JoinFlat")}>
            {joinFlatText}
          </Button>
          <Button onPress={() => navigation.push("CreateFlat")}>
            {createFlatText}
          </Button>
        </Padding>
      )}
      <AccountCard />
    </Screen>
  );
};

export default Home;
