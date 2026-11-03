import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { ExternalRedirect } from './ExternalRedirect';
import { Home } from '../pages/Home';
import { ItemDetail } from '../pages/ItemDetail';
import { SeccionPage } from '../pages/SeccionPage';
import { CashlessPage } from '../pages/CashlessPage';

const baseUrl = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

/** Mismos destinos que usan los botones de la home. */
const TICKETING_URL = 'https://ticketing.coolco.io/tickets-ar/es/main';
const FAN_TO_FAN_URL = 'https://sell-ticket.f2f.coolco.io/es/landing?ticketSellerId=148';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'tickets/*', element: <ExternalRedirect to={TICKETING_URL} /> },
        { path: 'entradas', element: <ExternalRedirect to={TICKETING_URL} /> },
        { path: 'fantofan', element: <ExternalRedirect to={FAN_TO_FAN_URL} /> },
        { path: 'cashless', element: <CashlessPage /> },
        { path: 'seccion/:slug', element: <SeccionPage /> },
        { path: 'item/:id', element: <ItemDetail /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: baseUrl }
);
