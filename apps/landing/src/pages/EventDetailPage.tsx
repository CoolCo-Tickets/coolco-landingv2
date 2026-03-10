import { Link, useParams } from 'react-router-dom';

/**
 * Event detail placeholder — TICKETS sub-view. FR-003.
 * Route: /tickets/evento/:id
 */
export function EventDetailPage(): JSX.Element {
  const params = useParams<{ id: string }>();
  const id = params.id ?? '';

  return (
    <main className="min-h-[60vh] px-4 py-8">
      <h1 className="text-2xl font-semibold">Evento {id || '—'}</h1>
      <p className="mt-2 text-[var(--color-text-muted)]">Contenido según event-detail-pages.png.</p>
      <Link to="/tickets" className="mt-4 inline-block text-sm font-medium text-blue-600 underline">
        Volver a TICKETS
      </Link>
      <Link to="/" className="ml-4 inline-block text-sm font-medium text-blue-600 underline">
        Inicio
      </Link>
    </main>
  );
}
