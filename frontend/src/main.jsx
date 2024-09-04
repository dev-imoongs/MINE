import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // retry: 0, // 재요청 하지 않는다는 설정
        },
    },
});
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>
);
