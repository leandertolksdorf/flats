import { Session, User } from "@supabase/supabase-js";
import { definitions } from "types/supabase";
import create from "zustand";
import supabase from "../lib/supabase";

type State = {
  // UI state
  snackbarMessage: string;
  snackbarVisible: boolean;
  showSnackbar: (message: string) => void;
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
  // Auth form
  setupForm: {
    email: string;
    password: string;
    firstName: string;
  };
  setSetupForm: (data: {
    email?: string;
    password?: string;
    firstName?: string;
  }) => void;
  clearSetupForm: () => void;
  signIn: (data: { email: string; password: string }) => void;
  signUp: () => void;
  signOut: () => void;
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
  snackbarMessage: "",
  snackbarVisible: false,
  showSnackbar: (message: string) => {
    set({ snackbarMessage: message, snackbarVisible: true });
    setTimeout(() => set({ snackbarVisible: false }), 5000);
  },
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
    // console.log("Profile:", data, "Error:", error);
    await get().fetchProfile();
    await get().fetchFlatmates();
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
    }
  },
  updateFlat: async (update: Partial<definitions["flats"]>) => {
    console.log(get().flat?.id);
    const { data, error } = await supabase
      .from<definitions["flats"]>("flats")
      .update(update)
      .eq("id", get().flat?.id);

    console.log("Update Flat:", data, "Error:", error);
    await get().fetchFlat();
    get().showSnackbar("Gespeichert!");
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
  // Auth
  setupForm: {
    email: "",
    password: "",
    firstName: "",
  },
  setSetupForm: (data) =>
    set((state) => ({ setupForm: { ...state.setupForm, ...data } })),
  clearSetupForm: () =>
    set((state) => ({
      setupForm: {
        email: "",
        password: "",
        firstName: "",
      },
    })),
  signIn: async (data: { email: string; password: string }) => {
    const { user, session, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });
    if (!error) {
      get().fetchProfile();
      get().fetchFlat();
    } else {
      throw new Error(error.message);
    }
  },
  signUp: async () => {
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: get().setupForm.email,
        password: get().setupForm.password,
      },
      {
        data: {
          first_name: get().setupForm.firstName,
        },
      }
    );
    get().clearSetupForm();
    await get().fetchAll();
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
