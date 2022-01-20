import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Snackbar from "./components/Snackbar";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import supabase from "./lib/supabase";
import React, { ReactNode, useEffect } from "react";
import Expo from "expo";
import "react-native-gesture-handler";
import { setCustomText } from "react-native-global-props";
import "react-native-url-polyfill/auto";
import { TailwindProvider, useTailwind } from "tailwind-rn/dist";
import MainNavigator from "./navigation/Main";
import SetupStack from "./navigation/Setup";
import useStore from "./store";
import utilities from "../tailwind.json";

const UserContainer = () => {
  const [setSession, fetchAll] = useStore((state: any) => [
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

function FlatsNavigationContainer(props: any) {
  const tailwind = useTailwind();
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: tailwind("text-indigo-500").color,
          card: tailwind("text-indigo-200").color,
        },
      }}
      {...props}
    />
  );
}

export default function App() {
  let [fontsLoaded, error] = useFonts({
    "BerlinType-Regular": require("./assets/fonts/BerlinType-Regular.otf"),
    "BerlinType-Bold": require("./assets/fonts/BerlinType-Bold.otf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    setCustomText({
      style: {
        fontFamily: "BerlinType-Regular",
      },
    });
    return (
      <TailwindProvider utilities={utilities}>
        <FlatsNavigationContainer>
          <StatusBar style="light" />
          <UserContainer />
          <Snackbar />
        </FlatsNavigationContainer>
      </TailwindProvider>
    );
  }
}
