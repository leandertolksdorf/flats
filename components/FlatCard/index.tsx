import Avatar from "components/Avatar";
import Card from "components/Card";
import CardList from "components/CardList";
import {
  cityText,
  flatCardHeadingText,
  flatCodeShareText,
  generateInviteCodeText,
  inviteText,
  nameText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React, { useState } from "react";
import { Share, Text } from "react-native";
import useStore from "store";
import { definitions } from "types/supabase";

const FlatCard = ({ navigation }: any) => {
  // Edit fields
  const [flat, updateFlat, inviteCode, createInvite, flatmates] = useStore(
    (state: any) => [
      state.flat,
      state.updateFlat,
      state.inviteCode,
      state.createInvite,
      state.flatmates,
    ]
  );

  const [flatName, setFlatName] = useState(flat.name);
  const [flatCity, setFlatCity] = useState(flat.city);

  // Share flat code
  const handleInvite = async () => {
    let inviteCodeToShare = inviteCode || (await createInvite());
    const result = await Share.share({
      message: flatCodeShareText(inviteCodeToShare),
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  };

  const FlatmatesAvatars: typeof Avatar[] = flatmates.map(
    (flatmate: definitions["profiles"]) => (
      <Avatar seed={flatmate.avatar_seed || "seed"} size={10} />
    )
  );
  return (
    <CardList
      title={flatCardHeadingText}
      images={FlatmatesAvatars}
      onPressImage={() => {}}
    >
      <Card
        title={nameText}
        editable
        onChangeText={setFlatName}
        onEndEditing={() =>
          updateFlat({
            name: flatName,
          })
        }
        value={flatName}
        icon={"pencil"}
      />
      <Card
        title={cityText}
        editable
        onChangeText={setFlatCity}
        onEndEditing={() =>
          updateFlat({
            city: flatCity,
          })
        }
        value={flatCity}
        icon={"pencil"}
      >
        <Text style={tailwind("text-xl")}>{flat?.city}</Text>
      </Card>
      <Card
        title={inviteText}
        icon={"share"}
        value={inviteCode || generateInviteCodeText}
        onPress={handleInvite}
      ></Card>
    </CardList>
  );
};

export default FlatCard;
