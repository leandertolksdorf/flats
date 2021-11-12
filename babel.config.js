module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            lib: "./lib",
            components: "./components",
            screens: "./screens",
            navigation: "./navigation",
            store: "./store",
            config: "./config",
            assets: "./assets",
            constants: "./constants",
            util: "./util",
          },
        },
      ],
    ],
  };
};
