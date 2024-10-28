import * as path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.jsx'),
      name: 'index',
      fileName: 'index',
    },
  },
  plugins: [react()],
})
