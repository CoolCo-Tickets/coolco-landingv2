import { Outlet } from 'react-router-dom';

export function Layout(): JSX.Element {
  return (
    <div>
      <header className="border-b border-gray-200 px-4 py-2">
        <h1 className="text-lg font-semibold">CoolCo</h1>
      </header>
      <Outlet />
    </div>
  );
}
