import babel from '@rollup/plugin-babel';
// import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default {
  rollupInputOptions: {
    plugins: [
      babel({
        presets: [[
          "@babel/preset-env",
          {
            "corejs": 2,
            "useBuiltIns": "usage",
            "targets": {
              "ie": "11"
            }
          }
        ]]
      }),
    ],
  },
}