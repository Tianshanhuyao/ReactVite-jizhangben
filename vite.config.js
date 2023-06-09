import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createStyleImportPlugin } from "vite-plugin-style-import";
import path from 'path'
const __dirname = path.resolve()

export default defineConfig({
    plugins: [
        react(),
        createStyleImportPlugin({
            libs: [
                {
                    libraryName: "zarm",
                    esModules: true,
                    resolveStyle: (name) => {
                        return `zarm/es/${name}/style/css`;
                    },
                },
            ],
        }),
    ],
    css: {
      modules: {
        localsConvention: 'dashesOnly'
      },
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        }
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:7001/api/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
  resolve: {
    // extensions: ['', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      'utils': path.resolve(__dirname, 'src/utils') // src 路径
    }
  },
});
