import { FontAwesome5 } from "@expo/vector-icons";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import {
  createTaskScreenTitleText,
  editTaskScreenTitleText,
  tasksScreenTitleText,
} from "../../constants/strings";
import { useTailwind } from "tailwind-rn";

import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateOrEditTask from "../../screens/Main/Tasks/CreateOrEditTask";
import Tasks from "../../screens/Main/Tasks/Tasks";
import { useTheme } from "@react-navigation/native";
import { NavigationTheme } from "../../types/navigationTheme";
type TasksStackParamList = {
  Tasks: undefined;
  CreateOrEditTask: {
    taskId: string | undefined;
  };
};

export type TasksTabTasksScreenProps = StackScreenProps<
  TasksStackParamList,
  "Tasks"
>;

export type TasksTabCreateOrEditTaskScreenProps = StackScreenProps<
  TasksStackParamList,
  "CreateOrEditTask"
>;

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack = () => {
  const tailwind = useTailwind();
  const { stackNavigatorScreenOptions } = useTheme() as NavigationTheme;

  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={({ navigation }) => ({
          title: tasksScreenTitleText,
          headerRight: ({ tintColor }) => (
            <TouchableOpacity
              style={tailwind("px-4")}
              onPress={() => navigation.navigate("CreateOrEditTask")}
            >
              <FontAwesome5
                name="plus"
                style={tailwind("text-xl")}
                color={tintColor}
              />
            </TouchableOpacity>
          ),
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
