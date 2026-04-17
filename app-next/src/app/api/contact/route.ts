import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact-validation";

const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS_PER_IP = 5;

const requestStore = new Map<string, number[]>();

function isRateLimited(ip: string, now: number) {
  const timestamps = requestStore.get(ip) ?? [];
  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_IP) {
    requestStore.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  requestStore.set(ip, validTimestamps);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();

  if (isRateLimited(ip, now)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Demasiadas solicitudes. Intenta nuevamente en unos minutos.",
      },
      { status: 429 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo procesar el cuerpo de la solicitud." }, { status: 400 });
  }

  const validation = validateContactPayload(payload);

  if (!validation.valid) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  console.info("[contact-form] Nuevo mensaje", {
    receivedAt: new Date().toISOString(),
    ip,
    payload: validation.data,
  });

  return NextResponse.json({ ok: true, message: "Mensaje recibido. Gracias por contactar." }, { status: 200 });
}
