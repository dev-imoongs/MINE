import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api': 'http://localhost:8070',
                // '/chat': 'http://localhost:3080',
                // '/check': 'http://localhost:3080',
                '/chat': env.MINE_HOST,
                '/check': env.MINE_HOST,
            },
        },
    };
});
