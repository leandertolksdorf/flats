import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import classNames from "classnames";
import { differenceInDays, parseISO, startOfToday } from "date-fns";
import React from "react";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { intervalText } from "../constants/strings";
import { TasksTabCreateOrEditTaskScreenNavigationProp } from "../navigation/TasksStack";
import { definitions } from "../types/supabase";
import Text from "./Text";

const Task = (props: {
  task: definitions["tasks"];
  isOpen: boolean;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  const tailwind = useTailwind();
  const taskDate = parseISO(props.task.date);
  const todayDate = startOfToday();
  const daysToTask = differenceInDays(taskDate, todayDate);

  const isPast = daysToTask < 0;
  const isFuture = daysToTask > 0;

  let dateDifferenceText;
  if (daysToTask === 1) {
    dateDifferenceText = "Morgen fällig";
  } else if (daysToTask === -1) {
    dateDifferenceText = "Seit gestern fällig";
  } else if (daysToTask === 0) {
    dateDifferenceText = "Heute fällig";
  } else if (daysToTask < -1) {
    dateDifferenceText = "Seit " + daysToTask * -1 + " Tagen fällig";
  } else if (daysToTask > 1) {
    dateDifferenceText = "In " + daysToTask + " Tagen fällig";
  }

  const navigation =
    useNavigation<TasksTabCreateOrEditTaskScreenNavigationProp>();

  function onEditPress() {
    navigation.navigate("CreateOrEditTask", { taskId: props.task.id });
  }

  return (
    <View style={tailwind(classNames("mb-2", "rounded-xl", "overflow-hidden"))}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={tailwind(
            classNames(
              isPast ? "bg-rose-500" : "bg-indigo-500",
              isFuture && "opacity-50",
              "flex-row",
              "justify-between"
            )
          )}
        >
          <Text style={tailwind(`px-3 py-1 font-bold text-white`)}>
            {taskDate.toLocaleDateString("de-DE")}
          </Text>
          <Text style={tailwind(`px-3 py-1 text-white`)}>
            {dateDifferenceText}
          </Text>
        </View>
        <View style={tailwind("bg-white/75 p-3")}>
          <View style={tailwind("flex-row justify-between")}>
            <Text style={tailwind("text-xl font-bold")}>{props.task.name}</Text>
            <Text style={tailwind("text-xl text-indigo-800")}>
              {intervalText(props.task.frequency, props.task.interval)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={tailwind(classNames(props.isOpen || "h-0", "flex", "flex-row"))}
      >
        <TouchableOpacity
          style={tailwind(
            classNames(
              "flex",
              "flex-row",
              "justify-center",
              "items-center",
              "flex-1",
              "bg-pink-200",
              "p-2"
            )
          )}
        >
          <FontAwesome5 name="trash" style={tailwind("text-pink-800")} />
          <Text
            style={tailwind(
              classNames("font-bold", "text-center", "text-pink-800")
            )}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            classNames(
              "flex",
              "flex-row",
              "justify-center",
              "items-center",
              "flex-1",
              "bg-sky-200",
              "p-2"
            )
          )}
          onPress={onEditPress}
        >
          <FontAwesome5 name="pen" style={tailwind("text-sky-800")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            classNames(
              "flex",
              "flex-row",
              "justify-center",
              "items-center",
              "flex-[5]",
              "bg-emerald-200",
              "p-2"
            )
          )}
        >
          <FontAwesome5
            name="check"
            style={tailwind(classNames("text-emerald-800"))}
          />
          <Text
            style={tailwind(
              classNames("font-bold", "text-center", "text-emerald-800")
            )}
          >
            {"  "}Erledigt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
