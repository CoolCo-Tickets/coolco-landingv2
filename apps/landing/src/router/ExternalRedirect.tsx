import { useEffect } from 'react';

type ExternalRedirectProps = {
  to: string;
};

/**
 * Redirige a un sitio externo. GitHub Pages no permite redirecciones del servidor,
 * así que la redirección se hace desde el navegador apenas carga la ruta.
 */
export function ExternalRedirect({ to }: ExternalRedirectProps): JSX.Element {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="min-h-[60vh] px-4 py-8">
      <p>
        Te estamos llevando a <a href={to}>{to}</a>
      </p>
    </main>
  );
}
