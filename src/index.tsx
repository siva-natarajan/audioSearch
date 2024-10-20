import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootEl = document.getElementById('root');

if (!rootEl) throw new Error(`no root`);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
