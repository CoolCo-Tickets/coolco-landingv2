import { Link } from 'react-router-dom';

/**
 * FAN TO FAN destination — landing per spec (FR-003).
 * Route: /fantofan
 */
export function FantofanPage(): JSX.Element {
  return (
    <main className="min-h-[60vh] px-4 py-8">
      <h1 className="text-2xl font-semibold">FAN TO FAN</h1>
      <p className="mt-2 text-[var(--color-text-muted)]">
        Landing Fan to Fan. Diseño completo en siguientes tareas.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block text-sm font-medium text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
