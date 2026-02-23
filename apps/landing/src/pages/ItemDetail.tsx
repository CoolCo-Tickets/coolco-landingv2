import { Link, useParams } from 'react-router-dom';

export function ItemDetail(): JSX.Element {
  const params = useParams<{ id: string }>();
  const id = params.id;

  if (!id) {
    return (
      <main className="p-4">
        <p>No se ha especificado un id.</p>
        <Link to="/" className="text-blue-600 underline mt-2 inline-block">
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h2 className="text-xl font-semibold">Detalle</h2>
      <p className="mt-2">ID: {id}</p>
    </main>
  );
}
