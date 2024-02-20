import legacy from '@vitejs/plugin-legacy';
// import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
}