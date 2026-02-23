import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { ItemDetail } from '../pages/ItemDetail';

const baseUrl = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'item/:id', element: <ItemDetail /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: baseUrl }
);
