import Avatar from "components/Avatar";
import Text from "components/Text";
import {
  daytimeGreetingText,
  greetingHeadingWithNameText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import useStore from "store";

const Header = () => {
  const [profile, updateProfile, flat, signOut, updateFlat] = useStore(
    (state: any) => [
      state.profile,
      state.updateProfile,
      state.flat,
      state.signOut,
      state.updateFlat,
    ]
  );

  return (
    <View>
      <TouchableOpacity
        style={tailwind(
          "mb-2 p-3 bg-black bg-opacity-30 flex-row items-center rounded-xl justify-between"
        )}
        onPress={() => {
          updateProfile({
            avatar_seed: Math.random(),
          });
        }}
      >
        <View>
          <Text style={tailwind("text-2xl font-bold text-white")}>
            {greetingHeadingWithNameText(profile?.first_name)}
          </Text>
          <Text style={tailwind("text-2xl text-white")}>
            {daytimeGreetingText()}
          </Text>
        </View>
        <View style={tailwind("ml-2")}>
          <Avatar seed={profile?.avatar_seed || ""} size={16} round />
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity
          style={tailwind(
            "mb-2 px-3 py-1 bg-yellow-500 rounded-xl flex-row justify-between items-center"
          )}
        >
          <Text style={tailwind("text-lg text-black font-bold ")}>
            {" "}
            Du hast heute 2 Aufgaben!
          </Text>
          <FontAwesome
            name="exclamation-circle"
            color={getColor("black")}
            style={tailwind("text-lg")}
          />
        </TouchableOpacity> */}
      {/* <TouchableOpacity
          style={tailwind(
            "mb-2 px-3 py-1 bg-black bg-opacity-30 rounded-xl flex-row justify-between items-center"
          )}
        >
          <Text style={tailwind("text-lg text-white")}>
            {" "}
            Du bist 5,00€ im Plus.
          </Text>
          <FontAwesome
            name="check-circle"
            color={getColor("green-500")}
            style={tailwind("text-lg")}
          />
        </TouchableOpacity> */}
    </View>
  );
};
export default Header;
