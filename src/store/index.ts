import { Session, User } from "@supabase/supabase-js";
import { definitions } from "../types/supabase";
import create from "zustand";
import supabase from "../lib/supabase";

type State = {
  // Snackbar
  snackbarVisible: boolean;
  snackbarMessage: string;
  snackbarType: "success" | "warning" | "error" | "neutral";
  showSnackbar: (data: {
    message: string;
    type: "success" | "warning" | "error" | "neutral";
  }) => void;
  // All
  clearAll: () => void;
  fetchAll: () => void;
  //Auth
  user: User | null;
  session: Session | null;
  setUser: (user: User) => void;
  setSession: (session: Session) => void;
  updateUser: (data: any) => void;
  // Profile
  profile: definitions["profiles"] | null;
  fetchProfile: () => void;
  updateProfile: (data: Partial<definitions["profiles"]>) => void;
  // Flat
  flat: definitions["flats"] | null;
  inviteCode: string | null;
  fetchFlat: () => void;
  updateFlat: (data: Partial<definitions["flats"]>) => void;
  // Flatmates
  flatmates: definitions["profiles"][] | null;
  fetchFlatmates: () => void;
  signIn: (data: { email: string; password: string }) => void;
  signUp: (data: {
    email: string;
    password: string;
    first_name: string;
  }) => void;
  signOut: () => void;
  // Tasks
  tasks: definitions["tasks"][] | null;
  fetchTasks: () => void;
  createTask: (data: Partial<definitions["tasks"]>) => void;
  // Flat setup (create and join)
  flatForm: {
    flatName: string;
    flatCity: string;
    flatId: string;
  };
  setFlatForm: (data: {
    flatName?: string;
    flatCity?: string;
    flatId?: string;
  }) => void;
  clearFlatForm: () => void;
  createFlat: () => void;
  joinFlat: (shortcode: string) => void;
};

const useStore = create<State>((set, get) => ({
  //Snackbar
  snackbarVisible: false,
  snackbarMessage: "",
  snackbarType: "neutral",
  showSnackbar: ({ message, type }) => {
    set({
      snackbarVisible: true,
      snackbarMessage: message,
      snackbarType: type,
    });
    setTimeout(() => set({ snackbarVisible: false }), 5000);
  },
  // All
  clearAll: () => {
    set({
      profile: null,
      flat: null,
      flatmates: null,
      inviteCode: null,
    });
  },
  fetchAll: async () => {
    await get().fetchProfile();
    await get().fetchFlat();
    await get().fetchFlatmates();
    await get().fetchTasks();
  },
  // Auth
  user: null,
  session: null,
  setUser: async (user: User) => {
    set({ user });
    await get().fetchAll();
  },
  setSession: (session: Session) => set({ session }),
  updateUser: async (update: any) => {
    const { user, error } = await supabase.auth.update(update);
  },
  // Profile
  profile: null,
  fetchProfile: async () => {
    const { data, error } = await supabase
      .from<definitions["profiles"]>("profiles")
      .select()
      .eq("id", get().user?.id);
    console.log("Fetch Profile:", data, "Error:", error);
    set({ profile: data ? data[0] : null });
  },
  updateProfile: async (update: Partial<definitions["profiles"]>) => {
    const { data, error } = await supabase
      .from<definitions["profiles"]>("profiles")
      .update(update)
      .eq("id", get().user?.id);
    await get().fetchProfile();
    console.log("PROFILE", get().profile);
    await get().fetchFlat();
  },
  // Flat
  flat: null,
  inviteCode: null,
  fetchFlat: async () => {
    const { data: flat_data, error: flat_error } = await supabase
      .from<definitions["flats"]>("flats")
      .select();
    console.log("Fetch Flat:", flat_data, "Error:", flat_error);
    const hasFlat = flat_data !== null && flat_data!.length !== 0;
    if (hasFlat) {
      set({
        flat: flat_data[0],
      });

      const { data: invite_data, error: invite_error } = await supabase
        .from<definitions["invitations"]>("invitations")
        .select("shortcode")
        .eq("flat_id", flat_data[0].id);
      const hasInviteCode = invite_data !== null && invite_data?.length !== 0;

      if (hasInviteCode) {
        set({ inviteCode: invite_data[0].shortcode });
      }
    } else {
      set({ flat: null });
    }
  },
  updateFlat: async (update: Partial<definitions["flats"]>) => {
    const { data, error } = await supabase
      .from<definitions["flats"]>("flats")
      .update(update)
      .eq("id", get().flat?.id);
    await get().fetchFlat();
  },
  // Flatmates
  flatmates: [],
  fetchFlatmates: async () => {
    const { data, error } = await supabase
      .from<definitions["profiles"]>("profiles")
      .select();
    console.log("Fetch flatmates", data, "Error:", error);
    set({ flatmates: data });
  },
  // Tasks
  tasks: [],
  fetchTasks: async () => {
    const { data, error } = await supabase
      .from<definitions["tasks"]>("tasks")
      .select()
      .order("date");
    set({ tasks: data });
  },
  createTask: async (new_task: Partial<definitions["tasks"]>) => {
    console.log(new_task);
    const { data, error } = await supabase
      .from<definitions["tasks"]>("tasks")
      .insert(new_task);
    console.log(data, error);
    get().fetchTasks();
  },
  // Auth
  signIn: async (data: { email: string; password: string }) => {
    const { user, session, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });
    if (!error) {
      get().fetchAll();
    } else {
      throw new Error(error.message);
    }
  },
  signUp: async (data: {
    email: string;
    password: string;
    first_name: string;
  }) => {
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: data.email,
        password: data.password,
      },
      {
        data: {
          first_name: data.first_name,
        },
      }
    );
    console.log(user);
    if (!error) {
      await get().fetchAll();
    } else {
      throw new Error(error.message);
    }
  },
  signOut: async () => {
    get().clearAll();
    await supabase.auth.signOut();
  },
  // Flat form
  flatForm: {
    flatName: "",
    flatCity: "",
    flatId: "",
  },
  setFlatForm: (data) => {
    set((state) => ({ flatForm: { ...state.flatForm, ...data } }));
  },
  clearFlatForm: () =>
    set((state) => ({
      flatForm: {
        flatCity: "",
        flatId: "",
        flatName: "",
      },
    })),
  createFlat: async () => {
    const { data, error } = await supabase
      .from<definitions["flats"]>("flats")
      .insert(
        {
          name: get().flatForm.flatName,
          city: get().flatForm.flatCity,
        },
        {
          returning: "minimal",
        }
      );
    console.log(data, error);
    get().clearFlatForm();
    get().fetchFlat();
  },
  joinFlat: async (shortcode: string) => {
    const { data: invitation_data, error: invitation_error } = await supabase
      .from<definitions["invitations"]>("invitations")
      .select("flat_id")
      .eq("shortcode", shortcode);
    if (invitation_data?.length === 0) {
      throw Error("Invitation does not exist");
    }
    const flat_id = invitation_data![0].flat_id;
    const { data: profile_data, error: profile_error } = await supabase
      .from<definitions["profiles"]>("profiles")
      .update({
        flat_id: flat_id,
      });
    get().fetchProfile();
    get().fetchFlat();
  },
  createInvite: async () => {
    const { data, error } = await supabase
      .from<definitions["invitations"]>("invitations")
      .insert([{ flat_id: get().flat?.id }]);
    set({ inviteCode: data![0].shortcode });
    return data![0].shortcode;
  },
}));

export default useStore;
