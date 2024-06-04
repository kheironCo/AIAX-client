import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GraphQLProvider } from 'graphql';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GraphQLProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GraphQLProvider>
  </React.StrictMode>,
);
