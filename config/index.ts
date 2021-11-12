import Constants from "expo-constants";

const config = {
  SUPABASE_URL: Constants.manifest?.extra?.SUPABASE_URL,
  SUPABASE_KEY: Constants.manifest?.extra?.SUPABASE_KEY,
};

export default config;
