import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import path from 'path';

export default defineConfig({
  plugins: [
    solidPlugin() as Plugin,
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      },
    }),
    Icons({ compiler: 'solid' }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
});
