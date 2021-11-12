import Avatar from "components/Avatar";
import Card from "components/Card";
import CardList from "components/CardList";
import { accountCardHeadingText, emailText, nameText } from "constants/strings";
import React, { useEffect, useState } from "react";
import useStore from "store";

const AccountCard = () => {
  const [user, updateUser, profile, updateProfile] = useStore((state: any) => [
    state.user,
    state.updateUser,
    state.profile,
    state.updateProfile,
  ]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setFirstName(profile?.first_name);
    setEmail(user?.email);
  }, [profile, user]);
  return (
    <CardList
      title={accountCardHeadingText}
      images={[<Avatar seed={profile?.avatar_seed || "seed"} size={20} />]}
      onPressImage={() => {
        updateProfile({
          avatar_seed: Math.random(),
        });
      }}
    >
      <Card
        editable
        title={nameText}
        icon="pencil"
        value={firstName}
        onChangeText={setFirstName}
        onEndEditing={() => updateProfile()}
      />
      <Card
        editable
        title={emailText}
        icon="pencil"
        value={email}
        onChangeText={setEmail}
        onEndEditing={() => updateUser({ email: email })}
      />
    </CardList>
  );
};
export default AccountCard;
