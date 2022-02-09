import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import {
  accountCardHeadingText,
  emailText,
  nameText,
  signOutText,
} from "../constants/strings";

import useStore from "../store";
import { HomeStackScreenProps } from "../types/navigation";
import Button from "./Button";
import Card from "./Card";
import CardList from "./CardList";
import Text from "./Text";

const AccountCard = () => {
  const navigation =
    useNavigation<HomeStackScreenProps<"Home">["navigation"]>();
  const tailwind = useTailwind();
  const [user, signOut, profile] = useStore((state: any) => [
    state.user,
    state.signOut,
    state.profile,
  ]);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <CardList
        title={accountCardHeadingText}
        actionText="Bearbeiten"
        onPressAction={() => navigation.navigate("ProfileEdit")}
      >
        <Card title={nameText}>
          <Text style={tailwind("text-xl")}>{profile?.first_name}</Text>
        </Card>
        <Card title={emailText}>
          <Text style={tailwind("text-xl")}>{user?.email}</Text>
        </Card>
      </CardList>
      <Button text title="Abmelden" onPress={handleSignOut}>
        {signOutText}
      </Button>
    </>
  );
};
export default AccountCard;
