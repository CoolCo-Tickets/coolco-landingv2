import { Link } from 'react-router-dom';

/**
 * CASHLESS destination — "Próximamente" / coming-soon per spec (FR-003).
 * Route: /cashless
 */
export function CashlessPage(): JSX.Element {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background: dark crowd image with heavy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/coolco-bg-mobile.webp)` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/80" aria-hidden />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <img
          src={`${import.meta.env.BASE_URL}logos/CoolCo Cashless_grey.svg`}
          alt="CoolCo Cashless"
          className="w-48 sm:w-64 lg:w-80 opacity-60"
        />

        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="inline-block rounded-full border border-gray-500 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Próximamente
          </span>
          <p className="max-w-md text-sm text-gray-500 leading-relaxed">
            Estamos preparando algo increíble. Muy pronto podrás gestionar tus pagos cashless desde
            aquí.
          </p>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
