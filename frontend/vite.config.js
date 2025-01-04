import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: { '/api': 'http://localhost:8070', '/chat' : 'http://localhost:3080', '/check' : 'http://localhost:3080' },
    },
});
