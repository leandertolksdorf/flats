import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import Text from "../../components/Text";
import {
  accountCardHeadingText,
  emailText,
  nameText,
  signOutText,
} from "../../constants/strings";
import useStore from "../../store";

const AccountCard = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
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
        onPressAction={() => navigation.navigate("EditProfile")}
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
