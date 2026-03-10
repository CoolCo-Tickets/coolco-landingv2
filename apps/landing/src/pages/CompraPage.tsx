import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const COMPRA_STEPS = ['Datos', 'Pago', 'Confirmación'] as const;

/**
 * Compra flow from TICKETS — multi-step (mock). FR-007.
 * Route: /tickets/compra. Steps per screenshots COMPRA 2–6, COMPRA TICKETS 01–03.
 */
export function CompraPage(): JSX.Element {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const totalSteps = COMPRA_STEPS.length;

  return (
    <main className="min-h-[60vh] px-4 py-8">
      <h1 className="text-2xl font-semibold">Compra</h1>
      <p className="mt-2 text-[var(--color-text-muted)]">
        Paso {step + 1} de {totalSteps}: {COMPRA_STEPS[step]}. (Mock; diseño completo según screenshots.)
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="min-h-[44px] rounded border border-gray-300 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Anterior
          </button>
        ) : (
          <Link
            to="/tickets"
            className="inline-flex min-h-[44px] items-center justify-center rounded border border-gray-300 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancelar
          </Link>
        )}
        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="min-h-[44px] rounded bg-[var(--color-section-tickets)] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={() => navigate('/tickets')}
            className="min-h-[44px] rounded bg-[var(--color-section-tickets)] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Finalizar (mock)
          </button>
        )}
      </div>
      <Link to="/" className="mt-6 inline-block text-sm font-medium text-blue-600 underline">
        Inicio
      </Link>
    </main>
  );
}
