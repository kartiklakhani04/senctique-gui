import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: '192.168.1.104',
        open: true,
        port: 5173,
        strictPort: true,
    },
});

