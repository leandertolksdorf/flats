import "dotenv/config";

export default {
  expo: {
    name: "flats",
    slug: "flats",
    owner: "farbigmedia",
    version: "0.1.2",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      buildNumber: "5",
      bundleIdentifier: "com.farbigmedia.flats",
      supportsTablet: true,
    },
    android: {
      package: "com.farbigmedia.flats",
      adaptiveIcon: {
        foregroundImage: "./src/assets/icon.png",
        backgroundColor: "#FFFFFF",
      },
      permissions: [],
      versionCode: 5,
    },
    web: {
      favicon: "./src/assets/favicon.png",
    },
    extra: {
      SUPABASE_URL: process.env.SUPABASE_URL as string,
      SUPABASE_KEY: process.env.SUPABASE_KEY as string,
    },
  },
};
