import { FontAwesome5 } from "@expo/vector-icons";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import {
  createTaskScreenTitleText,
  editTaskScreenTitleText,
  tasksScreenTitleText,
} from "constants/strings";
import { tailwind } from "lib/tailwind";
import { StackNavigatorScreenOptions } from "lib/themes";
import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateOrEditTask from "screens/Main/Tasks/CreateOrEditTask";
import Tasks from "screens/Main/Tasks/Tasks";
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
  return (
    <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
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
