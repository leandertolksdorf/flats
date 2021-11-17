import { useNavigation } from "@react-navigation/native";
import Avatar from "components/Avatar";
import Card from "components/Card";
import CardList from "components/CardList";
import Text from "components/Text";
import {
  cityText,
  flatCardHeadingText,
  flatCodeShareText,
  flatmatesText,
  generateInviteCodeText,
  inviteText,
  nameText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";
import { Share, View } from "react-native";
import useStore from "store";
import { definitions } from "types/supabase";

const FlatCard = () => {
  const navigation = useNavigation();
  // Edit fields
  const [flat, inviteCode, createInvite, flatmates] = useStore((state: any) => [
    state.flat,
    state.inviteCode,
    state.createInvite,
    state.flatmates,
  ]);

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
    (flatmate: definitions["profiles"], i: number) => (
      <Avatar
        key={i}
        seed={flatmate.avatar_seed || "seed"}
        size={6}
        round
        style={tailwind("ml-1")}
      />
    )
  );
  return (
    <CardList
      title={flatCardHeadingText}
      actionText="Bearbeiten"
      onPressAction={() => navigation.navigate("EditFlat")}
    >
      <Card title={flatmatesText}>
        <View style={tailwind("flex-row")}>{FlatmatesAvatars}</View>
      </Card>
      <Card title={nameText}>
        <Text style={tailwind("text-xl")}>{flat.name}</Text>
      </Card>
      <Card title={cityText}>
        <Text style={tailwind("text-xl")}>{flat.city}</Text>
      </Card>
      <Card title={inviteText} onPress={handleInvite}>
        <Text style={tailwind("text-xl")}>
          {inviteCode || generateInviteCodeText}
        </Text>
      </Card>
    </CardList>
  );
};

export default FlatCard;
