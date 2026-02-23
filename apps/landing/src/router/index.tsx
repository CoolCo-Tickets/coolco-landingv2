import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export function AppRouter(): JSX.Element {
  return <RouterProvider router={router} />;
}
