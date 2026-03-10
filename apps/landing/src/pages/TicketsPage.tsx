import { Link } from 'react-router-dom';

/**
 * TICKETS destination — landing (event list, hero, Comprar CTAs). FR-003.
 * Route: /tickets. "Ingresar" and "Mi cuenta" are UI only (no login).
 */
export function TicketsPage(): JSX.Element {
  return (
    <main className="min-h-[60vh] px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-semibold">TICKETS</h1>
        <p className="mt-2 text-[var(--color-text-muted)]">
          Landing: eventos, hero, Comprar. Diseño completo según screenshots.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/tickets/compra"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded bg-[var(--color-section-tickets)] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Comprar
          </Link>
          <Link
            to="/tickets/mis-entradas"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Mis entradas
          </Link>
          <span className="inline-flex min-h-[44px] items-center px-4 py-2 text-sm font-medium text-gray-600">
            Mi cuenta
          </span>
        </div>
        <Link
          to="/"
          className="mt-6 inline-block text-sm font-medium text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
