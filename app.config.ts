import "dotenv/config";

export default {
  expo: {
    name: "flats",
    slug: "flats",
    owner: "farbigmedia",
    version: "0.1.2",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.farbigmedia.flats",
      supportsTablet: true,
    },
    android: {
      package: "com.farbigmedia.flats",
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#FFFFFF",
      },
      permissions: [],
      versionCode: 3,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      SUPABASE_URL: process.env.SUPABASE_URL as string,
      SUPABASE_KEY: process.env.SUPABASE_KEY as string,
    },
  },
};
