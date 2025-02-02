import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import dotenv from 'dotenv';
// dotenv.config();


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // 상대 경로 유지
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // src 폴더를 '@'로 참조 가능하게 설정
            '@styles': path.resolve(__dirname, 'src/styles'), // styles 폴더 직접 지정
        },
    },
    server: {
        proxy: {
            '/api': 'http://localhost:8070',
            // '/chat' : 'http://124.59.38.60:22304',
            // '/check' :  'http://124.59.38.60:22304',
            // '/chat' : process.env.VITE_MINE_URL,
            // '/check' :  process.env.VITE_MINE_URL
            // '/chat' : process.env.VITE_LOCAL_URL,
            // '/check' :  process.env.VITE_MINE_URL
            '/chat': 'http://localhost:3080',
            '/check' : 'http://localhost:3080',
        },
    },
});
