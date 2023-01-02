import { viteStaticCopy as copy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  plugins: [
    copy({
      targets: [{ src: 'data/*', dest: 'data' }],
    }),
  ],
  base: './',
  build: {
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: '80',
    // https: {
    //   key: fs.readFileSync('/etc/letsencrypt/live/indgeos.in/privkey.pem'),
    //   cert: fs.readFileSync('/etc/letsencrypt/live/indgeos.in/cert.pem'),
    // },
  }
});
