import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import { NavHistoryProvider } from "@/lib/NavHistoryContext";
import { FloatingSettings } from "@/components/FloatingSettings";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <NavHistoryProvider>
        <div className="site-shell">
          <SiteHeader />
          <main className="container page-section">
            <Breadcrumbs />
            {children}
          </main>
          <SiteFooter />
          <FloatingSettings />
        </div>
      </NavHistoryProvider>
    </LanguageProvider>
  );
}
