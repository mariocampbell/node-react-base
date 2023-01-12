import React from 'react';
import 'core-js';
import 'regenerator-runtime';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styles.scss';
import { Home, About } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
