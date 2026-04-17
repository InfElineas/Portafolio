import Link from "next/link";

export default function NotFound() {
  return (
    <section className="panel page-stack">
      <p className="page-eyebrow">404</p>
      <h1 className="page-title">Página no encontrada</h1>
      <p className="page-copy">La ruta que intentas abrir no existe o fue movida durante la migración.</p>
      <p>
        <Link href="/" className="next-home__btn">
          Volver al inicio
        </Link>
      </p>
    </section>
  );
}
