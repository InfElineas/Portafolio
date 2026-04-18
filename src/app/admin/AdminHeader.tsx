"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <span className="site-header__brand">
          <span className="site-header__brand-prefix">~/</span>admin
        </span>
        <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
          <Link href="/" className="site-header__link">← Ver sitio</Link>
          <button onClick={handleLogout} className="btn btn--accent" style={{ fontSize: "0.78rem", padding: "0.38rem 0.85rem" }}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}
