import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

/**
 * Root Tab
 */
export type RootTabParamList = {
  HomeRoot: undefined;
  TasksRoot: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, T>;

/**
 * Home Stack
 */

export type HomeStackParamList = {
  Home: undefined;
  FlatCreate: undefined;
  FlatJoin: undefined;
  FlatEdit: undefined;
  ProfileEdit: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;

/**
 * Start Stack
 */

export type StartStackParamList = {
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type StartStackScreenProps<T extends keyof StartStackParamList> =
  CompositeScreenProps<
    StackScreenProps<StartStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;

/**
 * Tasks Stack
 */

export type TasksStackParamList = {
  Tasks: undefined;
  CreateOrEditTask:
    | {
        taskId: number;
      }
    | undefined;
};

export type TasksStackScreenProps<T extends keyof TasksStackParamList> =
  CompositeScreenProps<
    StackScreenProps<TasksStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
