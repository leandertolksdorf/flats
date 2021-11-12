import { Button, FlatCard, Text } from "components";
import AccountCard from "components/AccountCard";
import Padding from "components/Padding";
import {
  createFlatText,
  greetingHeadingWithNameText,
  greetingSubheadingText,
  joinFlatText,
  noFlatText,
  signOutText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";
import useStore from "store";
import Screen from "../../../components/Screen";

const Home = ({ navigation }: any) => {
  const [profile, flat, signOut, updateFlat] = useStore((state: any) => [
    state.profile,
    state.flat,
    state.signOut,
    state.updateFlat,
  ]);

  return (
    <Screen scroll>
      <Padding>
        <Text style={tailwind("text-3xl font-bold")}>
          {greetingHeadingWithNameText(profile?.first_name)}
        </Text>
        <Text style={tailwind("text-3xl")}>{greetingSubheadingText}</Text>
      </Padding>
      {flat === null ? (
        <Padding>
          <Text style={tailwind("text-xl pb-3")}>{noFlatText}</Text>
          <Button onPress={() => navigation.push("joinFlat")}>
            {joinFlatText}
          </Button>
          <Button onPress={() => navigation.push("createFlat")}>
            {createFlatText}
          </Button>
        </Padding>
      ) : (
        <>
          <FlatCard />
        </>
      )}
      <AccountCard />
      <Padding>
        <Button text title="Abmelden" onPress={signOut}>
          {signOutText}
        </Button>
      </Padding>
    </Screen>
  );
};

export default Home;
