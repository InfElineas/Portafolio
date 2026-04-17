"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const isDisabled = useMemo(() => {
    return isSubmitting || !formState.name || !formState.email || !formState.message;
  }, [formState, isSubmitting]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as { ok: boolean; message?: string; error?: string; errors?: string[] };

      if (!response.ok || !result.ok) {
        const fallback = "No se pudo enviar el mensaje. Intenta nuevamente.";
        const detail = result.error ?? result.errors?.join(" ") ?? fallback;
        setStatusMessage(detail);
        setIsSuccess(false);
        return;
      }

      setStatusMessage(result.message ?? "Mensaje enviado correctamente.");
      setIsSuccess(true);
      setFormState(initialState);
    } catch {
      setStatusMessage("Error de red. Revisa tu conexión e intenta nuevamente.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-field">
        Nombre
        <input
          type="text"
          value={formState.name}
          onChange={(event) => setFormState((previous) => ({ ...previous, name: event.target.value }))}
          placeholder="Tu nombre"
          minLength={2}
          required
        />
      </label>

      <label className="form-field">
        Email
        <input
          type="email"
          value={formState.email}
          onChange={(event) => setFormState((previous) => ({ ...previous, email: event.target.value }))}
          placeholder="tuemail@dominio.com"
          required
        />
      </label>

      <label className="form-field">
        Mensaje
        <textarea
          value={formState.message}
          onChange={(event) => setFormState((previous) => ({ ...previous, message: event.target.value }))}
          placeholder="Cuéntame sobre tu proyecto"
          minLength={10}
          maxLength={1500}
          rows={5}
          required
        />
      </label>

      <button type="submit" className="next-home__btn form-submit" disabled={isDisabled}>
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>

      {statusMessage ? (
        <p className={isSuccess ? "form-status form-status--success" : "form-status form-status--error"}>{statusMessage}</p>
      ) : null}
    </form>
  );
}
