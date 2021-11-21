import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { tasksScreenTitleText } from "constants/strings";
import { StackNavigatorScreenOptions } from "lib/themes";
import * as React from "react";
import Tasks from "screens/Main/Tasks/Tasks";

type TasksStackParamList = {
  Tasks: undefined;
};

export type TasksTabTasksScreenProps = StackScreenProps<
  TasksStackParamList,
  "Tasks"
>;

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack = () => {
  return (
    <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{ title: tasksScreenTitleText }}
      />
    </Stack.Navigator>
  );
};

export default TasksStack;
