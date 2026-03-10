import { Outlet } from 'react-router-dom';

/** No nav per design: content overlays full-screen background. */
export function Layout(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
