import { Theme } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";

export interface NavigationTheme extends Theme {
  stackNavigatorScreenOptions: StackNavigationOptions;
}
