import { Header } from "../../shared/components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col text-(--text-primary)">
      <Header />

      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        {children}
      </main>

      <footer className="border-t border-(--border-subtle) py-5 text-center text-sm font-medium text-(--text-muted)">
        © 2026 Santiago Escobar
      </footer>
    </div>
  );
}
