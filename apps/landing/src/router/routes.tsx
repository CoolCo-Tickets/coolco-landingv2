import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { TicketsLayout } from './TicketsLayout';
import { Home } from '../pages/Home';
import { ItemDetail } from '../pages/ItemDetail';
import { SeccionPage } from '../pages/SeccionPage';
import { CashlessPage } from '../pages/CashlessPage';
import { TicketsPage } from '../pages/TicketsPage';
import { FantofanPage } from '../pages/FantofanPage';
import { YourTicketsPage } from '../pages/YourTicketsPage';
import { EventDetailPage } from '../pages/EventDetailPage';
import { CompraPage } from '../pages/CompraPage';

const baseUrl = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'tickets',
          element: <TicketsLayout />,
          children: [
            { index: true, element: <TicketsPage /> },
            { path: 'mis-entradas', element: <YourTicketsPage /> },
            { path: 'evento/:id', element: <EventDetailPage /> },
            { path: 'compra', element: <CompraPage /> },
          ],
        },
        { path: 'fantofan', element: <FantofanPage /> },
        { path: 'cashless', element: <CashlessPage /> },
        { path: 'seccion/:slug', element: <SeccionPage /> },
        { path: 'item/:id', element: <ItemDetail /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: baseUrl }
);
