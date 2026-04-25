import { Header } from "../../shared/components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col text-[var(--text-primary)]">
      <Header />

      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        {children}
      </main>

      <footer className="border-t border-[var(--border-subtle)] py-5 text-center text-sm font-medium text-[var(--text-muted)]">
        © 2026 Javeriana Lead Manager
      </footer>
    </div>
  );
}
