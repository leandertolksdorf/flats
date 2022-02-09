import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import classNames from "classnames";
import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import Text from "../components/Text";
import {
  createTaskScreenTitleText,
  editTaskScreenTitleText,
  tasksScreenTitleText,
} from "../constants/strings";
import CreateOrEditTask from "../screens/TaskEdit";
import Tasks from "../screens/Tasks";
import {
  TasksStackParamList,
  TasksStackScreenProps,
} from "../types/navigation";
import { NavigationTheme } from "../types/theme";

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack = () => {
  const tailwind = useTailwind();
  const { stackNavigatorScreenOptions } = useTheme() as NavigationTheme;

  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={({ navigation }: TasksStackScreenProps<"Tasks">) => ({
          title: tasksScreenTitleText,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateOrEditTask")}
              style={tailwind(
                classNames(
                  "bg-indigo-800",
                  "px-3",
                  "h-8",
                  "rounded-full",
                  "flex",
                  "flex-row",
                  "justify-center",
                  "items-center",
                  "mr-4"
                )
              )}
            >
              <Text
                style={tailwind(
                  classNames("text-lg", "font-bold", "text-indigo-100")
                )}
              >
                Neu{" "}
              </Text>
              <FontAwesome5
                name="plus"
                size={tailwind("text-lg").fontSize}
                color={tailwind("text-indigo-100").color}
              />
            </TouchableOpacity>
          ),
          // headerRight: ({ tintColor }) => (
          //   <TouchableOpacity
          //     style={tailwind("px-4")}
          //     onPress={() => navigation.navigate("CreateOrEditTask")}
          //   >
          //     <FontAwesome5
          //       name="plus"
          //       style={tailwind("text-xl")}
          //       color={tintColor}
          //     />
          //   </TouchableOpacity>
          // ),
        })}
      />
      <Stack.Screen
        name="CreateOrEditTask"
        component={CreateOrEditTask}
        options={({ route }) => ({
          title: route.params?.taskId
            ? editTaskScreenTitleText
            : createTaskScreenTitleText,
        })}
      />
    </Stack.Navigator>
  );
};

export default TasksStack;
