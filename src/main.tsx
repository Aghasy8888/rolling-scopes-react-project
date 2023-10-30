import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundery } from './components';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundery fallback="Someting went wrong!!">
    <App />
  </ErrorBoundery>
);
