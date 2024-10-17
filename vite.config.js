import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react()],
  base: '/safari/', // Replace <REPO_NAME> with your GitHub repository name.
});

