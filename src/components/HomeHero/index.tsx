import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import Text from "../../components/Text";
import {
  daytimeGreetingText,
  greetingHeadingWithNameText,
} from "../../constants/strings";
import useStore from "../../store";

const HomeHero = () => {
  const tailwind = useTailwind();
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
    <View style={tailwind("px-3 mb-4")}>
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
      </TouchableOpacity>
      {flat !== null && (
        <>
          <TouchableOpacity
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
              style={tailwind("text-lg text-black")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(
              "px-3 py-1 bg-black bg-opacity-30 rounded-xl flex-row justify-between items-center"
            )}
          >
            <Text style={tailwind("text-lg text-white")}>
              {" "}
              Du bist 5,00€ im Plus.
            </Text>
            <FontAwesome
              name="check-circle"
              style={tailwind("text-lg text-green-500")}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
export default HomeHero;
