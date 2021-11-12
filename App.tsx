import { NavigationContainer } from "@react-navigation/native";
import Snackbar from "components/Snackbar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import supabase from "lib/supabase";
import { NavigationTheme } from "lib/themes";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { setCustomText } from "react-native-global-props";
import "react-native-url-polyfill/auto";
import MainNavigator from "./navigation/Main";
import SetupStack from "./navigation/Setup";
import useStore from "./store";

const UserContainer = () => {
  const [session, setSession, fetchAll] = useStore((state: any) => [
    state.session,
    state.setSession,
    state.fetchAll,
  ]);
  const [user, setUser] = useStore((state: any) => [state.user, state.setUser]);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        setSession(session);
        setUser(session?.user ?? null);
        fetchAll();
      }
    );
    return () => {
      authListener!.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user ? <MainNavigator /> : <SetupStack />;
};

export default function App() {
  // Set defalult font
  let [fontsLoaded] = useFonts({
    "BerlinType-Regular": require("./assets/fonts/BerlinType-Regular.otf"),
    "BerlinType-Bold": require("./assets/fonts/BerlinType-Bold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    setCustomText({
      style: {
        fontFamily: "BerlinType-Regular",
      },
    });
    return (
      <NavigationContainer theme={NavigationTheme}>
        <StatusBar style="light" />
        <UserContainer />
        <Snackbar />
      </NavigationContainer>
    );
  }
}
