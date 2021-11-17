import Button from "components/Button";
import Card from "components/Card";
import CardList from "components/CardList";
import {
  accountCardHeadingText,
  emailText,
  nameText,
  signOutText,
} from "constants/strings";
import React, { useEffect, useState } from "react";
import useStore from "store";

const AccountCard = () => {
  const [user, updateUser, signOut, profile, updateProfile] = useStore(
    (state: any) => [
      state.user,
      state.updateUser,
      state.signOut,
      state.profile,
      state.updateProfile,
    ]
  );
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setFirstName(profile?.first_name);
    setEmail(user?.email);
  }, [profile, user]);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      <CardList
        title={accountCardHeadingText}
        actionText="Bearbeiten"
        onPressAction={() => {}}
      >
        <Card title={nameText} value={firstName} />
        <Card title={emailText} value={email} />
      </CardList>
      <Button text title="Abmelden" onPress={handleSignOut}>
        {signOutText}
      </Button>
    </>
  );
};
export default AccountCard;
