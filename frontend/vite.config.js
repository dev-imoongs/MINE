import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // 환경 변수 로드 (mode에 따라 다를 수 있음)
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api': 'http://localhost:8070',
                '/chat': env.MINE_HOST,
                '/check': env.MINE_HOST,
            },
        },
    };
});
