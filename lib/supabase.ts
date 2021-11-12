import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import config from "../config";

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false,
});

export default supabase;
