import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import Text from "../../components/Text";
import { intervalText } from "../../constants/strings";
import moment from "../../lib/moment";
import { definitions } from "../../types/supabase";

const Task = (props: { task: definitions["tasks"] }) => {
  const tailwind = useTailwind();
  const task_date = new Date(props.task.date);
  const today = new Date();
  const isToday = task_date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
  const isPassed = task_date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  return (
    <View
      style={tailwind(
        `${
          isPassed
            ? "bg-red-600 border border-red-600"
            : isToday
            ? "bg-purple-600 border border-purple-600"
            : "bg-primary-800 border border-primary-800"
        } mb-2 rounded-xl overflow-hidden`
      )}
    >
      <View style={tailwind("flex-row justify-between")}>
        <Text style={tailwind(`px-3 py-1 font-bold text-white`)}>
          {task_date.toLocaleDateString("de-DE")}
        </Text>
        <Text style={tailwind(`px-3 py-1 text-white`)}>
          {moment().to(task_date)}
        </Text>
      </View>
      <View style={tailwind("bg-primary-100 p-3")}>
        <View style={tailwind("flex-row justify-between mb-2")}>
          <Text style={tailwind("text-xl font-bold")}>{props.task.name}</Text>
          <Text style={tailwind("text-xl text-primary-400")}>
            {intervalText(props.task.frequency, props.task.interval)}
          </Text>
        </View>
        <View style={tailwind("flex-row ")}>
          <View>
            <TouchableOpacity
              style={tailwind(
                "flex-row items-center justify-center rounded-xl bg-red-200 w-10 h-10 mr-2"
              )}
            >
              <FontAwesome5
                name="trash"
                style={tailwind("text-sm text-red-900")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={tailwind(
                "flex-row items-center justify-center rounded-xl bg-blue-200 w-10 h-10 mr-2"
              )}
            >
              <FontAwesome5
                name="pencil-alt"
                style={tailwind("text-sm text-blue-900")}
              />
            </TouchableOpacity>
          </View>
          <View style={tailwind("flex-1")}>
            <TouchableOpacity
              style={tailwind(
                "flex-row items-center justify-center rounded-xl bg-green-200 h-10 border border-green-500"
              )}
            >
              <FontAwesome5
                name="check"
                style={tailwind("text-sm text-green-900 mr-1")}
              />
              <Text style={tailwind("text-lg font-bold text-green-900")}>
                Erledigt
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Task;
