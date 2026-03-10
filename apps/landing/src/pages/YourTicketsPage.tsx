import { Link } from 'react-router-dom';

/**
 * Your tickets placeholder — TICKETS sub-view. FR-003.
 * Route: /tickets/mis-entradas
 */
export function YourTicketsPage(): JSX.Element {
  return (
    <main className="min-h-[60vh] px-4 py-8">
      <h1 className="text-2xl font-semibold">Mis entradas</h1>
      <p className="mt-2 text-[var(--color-text-muted)]">Contenido según your-tickets-page.png.</p>
      <Link to="/tickets" className="mt-4 inline-block text-sm font-medium text-blue-600 underline">
        Volver a TICKETS
      </Link>
      <Link to="/" className="ml-4 inline-block text-sm font-medium text-blue-600 underline">
        Inicio
      </Link>
    </main>
  );
}
