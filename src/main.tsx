import { TonConnectUIProvider } from '@tonconnect/ui-react';
import twa from '@twa-dev/sdk';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components';
import router from './router';
import './styles/global.css';

// 初始化 telegram 小程序
twa.ready();

const manifesBasetUrl = 'https://miniapp.xname.app/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl={manifesBasetUrl + '/tonconnect-manifest.json'}>
      <ThemeProvider defaultTheme="dark" storageKey="shadcn-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </TonConnectUIProvider>
  </React.StrictMode>
);
