import { Outlet } from 'react-router-dom';

/**
 * Layout for /tickets/* routes; only renders child route.
 */
export function TicketsLayout(): JSX.Element {
  return <Outlet />;
}
