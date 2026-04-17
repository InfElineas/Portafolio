import Link from "next/link";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="page-section">
      <div className="container panel" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <strong style={{ color: "var(--primary)" }}>Jasan Badell</strong>
        <nav style={{ display: "flex", gap: "1rem", color: "var(--muted)" }} aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
