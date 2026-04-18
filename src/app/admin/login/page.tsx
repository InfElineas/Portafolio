"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Contraseña incorrecta.");
      setLoading(false);
    }
  }

  return (
    <div className="admin-login">
      <div className="admin-login__card panel">
        <div>
          <p className="page-eyebrow">Panel de administración</p>
          <h1 className="page-title" style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>
            Acceso restringido
          </h1>
        </div>
        <p className="page-copy">Introduce la contraseña para gestionar el portfolio.</p>
        <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: "100%" }}>
          <label className="form-field">
            <span className="form-label">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoFocus
            />
          </label>
          <button type="submit" className="btn btn--primary" disabled={loading} style={{ marginLeft: "auto" }}>
            {loading ? "Verificando..." : "Entrar →"}
          </button>
          {error && <p className="form-status form-status--error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
