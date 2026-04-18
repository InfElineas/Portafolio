import { cookies } from "next/headers";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const password = process.env.ADMIN_PASSWORD ?? "admin1234";
  return cookieStore.get("portfolio_session")?.value === password;
}
