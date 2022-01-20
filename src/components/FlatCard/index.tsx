import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Share } from "react-native";
import { useTailwind } from "tailwind-rn";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import Text from "../../components/Text";
import {
  cityText,
  flatCardHeadingText,
  flatCodeShareText,
  generateInviteCodeText,
  inviteText,
  nameText,
} from "../../constants/strings";
import useStore from "../../store";

const FlatCard = () => {
  const tailwind = useTailwind();
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
  return (
    <CardList
      title={flatCardHeadingText}
      actionText="Bearbeiten"
      onPressAction={() => navigation.navigate("EditFlat")}
    >
      <Card title={nameText}>
        <Text style={tailwind("text-xl")}>{flat?.name}</Text>
      </Card>
      <Card title={cityText}>
        <Text style={tailwind("text-xl")}>{flat?.city}</Text>
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
