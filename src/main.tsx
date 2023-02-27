import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { LandingPage, LoginPage, SignupPage } from './pages/ladingpage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    loader: () => import('./pages/ladingpage/LandingPage'),
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => import('./pages/ladingpage/auth/LoginPage'),
  },
  {
    path: '/signup',
    element: <SignupPage />,
    loader: () => import('./pages/ladingpage/auth/SignupPage'),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
