import { Link, useParams } from 'react-router-dom';

const SECTION_LABELS: Record<string, string> = {
  '1': 'Sección 1',
  '2': 'Sección 2',
  '3': 'Sección 3',
};

export function SeccionPage(): JSX.Element {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? '';
  const label = SECTION_LABELS[slug] ?? `Sección ${slug}`;

  return (
    <main className="min-h-[60vh] px-4 py-8">
      <h2 className="text-2xl font-semibold">{label}</h2>
      <p className="mt-2 text-gray-600">
        Contenido de la página destino. Diseño y contenido definitivos desde Figma.
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
