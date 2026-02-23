import { createRoot } from 'react-dom/client';
import './index.css';
import React, { Suspense, lazy } from 'react';
import AppProviders from './providers/AppProviders.jsx';

// Lazy load the App component
const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <AppProviders>
    {/* Suspense shows fallback while App is loading */}
    <Suspense fallback={<div>Loading portfolio...</div>}>
      <App />
    </Suspense>
  </AppProviders>
);