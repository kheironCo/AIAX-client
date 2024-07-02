import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      graph: resolve(__dirname, './src/graphql'),
      types: resolve(__dirname, './src/types'),
      'business/*': resolve(__dirname, './src/pages/business/*'),
      'schemas/*': resolve(__dirname, './src/schemas/*'),
    },
  },
});
