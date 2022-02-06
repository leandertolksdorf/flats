import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";
import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import {
  createTaskScreenTitleText,
  editTaskScreenTitleText,
  tasksScreenTitleText,
} from "../constants/strings";
import CreateOrEditTask from "../screens/TaskEdit";
import Tasks from "../screens/Tasks";
import { NavigationTheme } from "../types/theme";

type TasksStackParamList = {
  Tasks: undefined;
  CreateOrEditTask: {
    taskId: number | undefined;
  };
};

export type TasksTabTasksScreenProps = StackScreenProps<
  TasksStackParamList,
  "Tasks"
>;

export type TasksTabCreateOrEditTaskScreenNavigationProp = StackNavigationProp<
  TasksStackParamList,
  "CreateOrEditTask"
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
