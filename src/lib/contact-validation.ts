export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: unknown): { valid: boolean; errors: string[]; data?: ContactPayload } {
  const errors: string[] = [];

  if (typeof payload !== "object" || payload === null) {
    return { valid: false, errors: ["Payload inválido."] };
  }

  const record = payload as Record<string, unknown>;
  const name = String(record.name ?? "").trim();
  const email = String(record.email ?? "").trim().toLowerCase();
  const message = String(record.message ?? "").trim();

  if (name.length < 2) {
    errors.push("El nombre debe tener al menos 2 caracteres.");
  }

  if (!EMAIL_REGEX.test(email)) {
    errors.push("El email no es válido.");
  }

  if (message.length < 10) {
    errors.push("El mensaje debe tener al menos 10 caracteres.");
  }

  if (message.length > 1500) {
    errors.push("El mensaje supera el máximo de 1500 caracteres.");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    data: {
      name,
      email,
      message,
    },
  };
}
