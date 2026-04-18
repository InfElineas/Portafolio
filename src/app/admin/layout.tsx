import { AdminHeader } from "./AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <AdminHeader />
      <main className="container page-section">{children}</main>
    </div>
  );
}
