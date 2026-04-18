import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { password } = (await req.json()) as { password: string };
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin1234";

  if (password !== adminPassword) {
    return NextResponse.json({ ok: false, error: "Contraseña incorrecta." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("portfolio_session", adminPassword, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true });
}
