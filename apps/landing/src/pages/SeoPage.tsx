import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TICKET_URL = 'https://ticketing.coolco.io/tickets-ar/es/main';

const FAQ_ITEMS = [
  {
    question: '¿Cómo comprar entradas online en Argentina?',
    answer:
      'En CoolCo podés comprar entradas online de forma rápida y segura. Ingresá a nuestra plataforma, elegí el evento y pagá con tarjeta de crédito o débito. Recibís tus entradas digitales al instante.',
  },
  {
    question: '¿Dónde comprar entradas para recitales?',
    answer:
      'CoolCo es la ticketera online argentina con más oferta de recitales, shows musicales y conciertos. Encontrá entradas para recitales en Buenos Aires y todo el país en un solo lugar.',
  },
];

export function SeoPage(): JSX.Element {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Comprar Entradas Online Argentina | CoolCo Tickets, Cashless y Fan to Fan';

    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute(
        'content',
        'CoolCo es la ticketera online argentina para comprar entradas para recitales, fiestas electrónicas, conciertos y Estadio Obras. Pagos cashless y reventa Fan to Fan.'
      );
    }

    return () => {
      document.title = prev;
      if (descEl && prevDesc) descEl.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-white font-sans">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/coolco-bg.webp)` }}
        aria-hidden
      />
      <div
        className="fixed inset-0 bg-linear-to-b from-gray-950/60 via-gray-950/80 to-gray-950 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 focus:outline-none focus:ring-2 focus:ring-white rounded"
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
          Inicio
        </Link>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Comprar entradas online Argentina
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          <strong className="text-white">CoolCo</strong> es la ticketera online argentina para
          comprar tickets, gestionar pagos cashless y revender entradas Fan to Fan.
        </p>

        {/* CTA */}
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-950 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors mb-16 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Ver entradas disponibles hoy
        </a>

        {/* ── Marca y plataforma ── */}
        <section className="mb-14" aria-labelledby="marca-heading">
          <h2 id="marca-heading" className="text-2xl font-semibold mb-4">
            CoolCo Tickets: tu plataforma integral de ticketing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>CoolCo tickets</strong> y <strong>CoolCo entradas</strong> reúnen todo lo que
            necesitás para asistir a los mejores eventos de Argentina. Nuestro sistema de{' '}
            <strong>CoolCo ticketing</strong> te permite comprar{' '}
            <strong>entradas online Argentina</strong> de forma segura, rápida y sin filas. Somos la{' '}
            <strong>ticketera online argentina</strong> con mayor crecimiento.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400 list-none">
            {[
              'coolco tickets',
              'coolco entradas',
              'coolco ticketing',
              'comprar entradas online argentina',
              'ticketera online argentina',
            ].map((kw) => (
              <li key={kw} className="before:content-['→'] before:mr-2 before:text-pink-400">
                {kw}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Recitales ── */}
        <section className="mb-14" aria-labelledby="recitales-heading">
          <h2 id="recitales-heading" className="text-2xl font-semibold mb-4">
            Entradas para recitales y conciertos en Argentina
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Encontrá <strong>entradas para recitales Argentina</strong> y{' '}
            <strong>entradas conciertos argentina</strong> en CoolCo. Desde{' '}
            <strong>comprar entradas recitales Buenos Aires</strong> hasta conseguir{' '}
            <strong>tickets shows musicales argentina</strong> en el interior del país.{' '}
            <strong>Comprá tickets concierto online</strong> sin salir de casa.
          </p>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-pink-400 hover:text-pink-300 underline underline-offset-4 transition-colors"
          >
            Ver recitales disponibles →
          </a>
        </section>

        {/* ── Fiestas y eventos sociales ── */}
        <section className="mb-14" aria-labelledby="fiestas-heading">
          <h2 id="fiestas-heading" className="text-2xl font-semibold mb-4">
            Tickets para fiestas y eventos sociales
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            ¿Buscás <strong>entradas fiestas electrónicas argentina</strong> o{' '}
            <strong>tickets fiestas Buenos Aires</strong>? En CoolCo podés{' '}
            <strong>comprar entradas eventos sociales</strong> y conseguir{' '}
            <strong>tickets eventos nocturnos argentina</strong> para las mejores fiestas del país.
          </p>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-pink-400 hover:text-pink-300 underline underline-offset-4 transition-colors"
          >
            Ver fiestas y eventos →
          </a>
        </section>

        {/* ── Transaccionales ── */}
        <section className="mb-14 bg-white/5 rounded-2xl p-8" aria-labelledby="compra-heading">
          <h2 id="compra-heading" className="text-2xl font-semibold mb-4">
            Comprá entradas online ahora mismo
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            ¿Necesitás <strong>entradas último momento</strong>? En CoolCo siempre hay{' '}
            <strong>entradas disponibles hoy</strong>. Podés{' '}
            <strong>comprar entradas online</strong> con tarjeta de crédito o débito. Somos tu
            opción para <strong>tickets online argentina</strong> y{' '}
            <strong>comprar entrada con tarjeta argentina</strong> de forma segura.
          </p>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-950 font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white text-sm"
          >
            Comprar entradas online →
          </a>
        </section>

        {/* ── Estadio Obras ── */}
        <section className="mb-14" aria-labelledby="obras-heading">
          <h2 id="obras-heading" className="text-2xl font-semibold mb-4">
            Entradas Estadio Obras Buenos Aires
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Conseguí tus <strong>entradas estadio obras</strong> a través de CoolCo.{' '}
            <strong>Comprar entradas Estadio Obras Buenos Aires</strong> nunca fue tan fácil.
            Consultá los <strong>próximos shows estadio obras</strong> y elegí tu ubicación:{' '}
            <strong>entradas estadio obras campo platea</strong> y todas las plateas disponibles.
            También encontrás <strong>estadio obras sanitarias tickets</strong> y{' '}
            <strong>shows estadio obras Argentina</strong> con información completa de fechas.
            <strong> CoolCo entradas estadio obras</strong> te garantiza disponibilidad y{' '}
            <strong>estadio obras fechas entradas online</strong> actualizadas.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400 list-none mb-4">
            {[
              'entradas estadio obras',
              'estadio obras sanitarias tickets',
              'comprar entradas estadio obras buenos aires',
              'shows estadio obras argentina',
              'entradas estadio obras campo platea',
              'próximos shows estadio obras',
              'coolco entradas estadio obras',
              'estadio obras fechas entradas online',
            ].map((kw) => (
              <li key={kw} className="before:content-['→'] before:mr-2 before:text-pink-400">
                {kw}
              </li>
            ))}
          </ul>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-pink-400 hover:text-pink-300 underline underline-offset-4 transition-colors"
          >
            Ver shows en Estadio Obras →
          </a>
        </section>

        {/* ── Cashless ── */}
        <section className="mb-14" aria-labelledby="cashless-heading">
          <h2 id="cashless-heading" className="text-2xl font-semibold mb-4">
            Pagos cashless en eventos Argentina
          </h2>
          <p className="text-gray-300 leading-relaxed">
            CoolCo ofrece tecnología de <strong>pagos cashless</strong> para que disfrutes cada
            evento sin efectivo. El sistema <strong>cashless Argentina</strong> de CoolCo permite
            cargar saldo y pagar en stands de comida, bebidas y merchandise de forma rápida y
            segura.
          </p>
        </section>

        {/* ── FAQ / Informacionales ── */}
        <section className="mb-14" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-semibold mb-6">
            Preguntas frecuentes
          </h2>
          <dl className="space-y-6">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <div key={question} className="border-t border-white/10 pt-6">
                <dt className="font-semibold text-white mb-2">{question}</dt>
                <dd className="text-gray-300 leading-relaxed">{answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Footer CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4 text-sm">¿Listo para comprar tus entradas?</p>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-950 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            Ir a CoolCo Tickets
          </a>
        </div>
      </div>
    </main>
  );
}
