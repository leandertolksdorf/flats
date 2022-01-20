import { FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import Text from "../../components/Text";
import {
  daytimeGreetingText,
  greetingHeadingWithNameText,
} from "../../constants/strings";
import useStore from "../../store";
import { definitions } from "../../types/supabase";

const Header = () => {
  const tailwind = useTailwind();
  const [profile, updateProfile, flat, tasks, signOut, updateFlat] = useStore(
    (state: any) => [
      state.profile,
      state.updateProfile,
      state.flat,
      state.tasks,
      state.signOut,
      state.updateFlat,
    ]
  );

  const route = useRoute();

  const numberOfDueTasks = tasks.filter(
    (task: definitions["tasks"]) =>
      new Date(task.date).setHours(0, 0, 0, 0) <=
      new Date().setHours(0, 0, 0, 0)
  ).length;

  return (
    <View>
      {route.name === "Home" && (
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
      )}

      {route.name === "Tasks" && (
        <TouchableOpacity
          style={tailwind(
            `mb-2 p-3 py-1 rounded-xl flex-row justify-between items-center ${
              numberOfDueTasks > 0 ? "bg-red-600" : ""
            }`
          )}
        >
          <Text style={tailwind("text-lg text-black font-bold ")}>
            {" "}
            Es sind {numberOfDueTasks} Aufgaben zu erledigen.
          </Text>
          <FontAwesome
            name="exclamation-circle"
            style={tailwind("text-lg text-black")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Header;
