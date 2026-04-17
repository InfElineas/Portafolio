export default function HomePage() {
  return (
    <section className="panel">
      <p style={{ color: "var(--primary)", marginBottom: "0.8rem" }}>
        Paso 1 completado
      </p>
      <h1 style={{ marginBottom: "0.9rem", fontSize: "clamp(2rem, 4.2vw, 3rem)" }}>
        Migración Next.js inicializada
      </h1>
      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
        Esta base ya incluye App Router, TypeScript, layout global y rutas
        principales para continuar con la migración incremental.
      </p>
    </section>
  );
}
