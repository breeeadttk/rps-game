import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes/AppRoutes';

import { BrowserRouter } from 'react-router-dom';



// Context
import { GameProvider } from 'store/GameContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GameProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GameProvider>
  </React.StrictMode>
);
