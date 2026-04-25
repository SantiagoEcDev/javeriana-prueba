import { Link } from "react-router-dom";

export const HomeHero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-28 overflow-hidden rounded-4xl border border-(--border-subtle) bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,rgba(6,16,33,0.98),rgba(9,20,40,0.98))] p-8 shadow-(--surface-shadow) md:p-12"
    >
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[rgba(10,19,35,0.72)] px-6 py-16 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-10 md:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px] opacity-40" />
        <div className="absolute left-8 top-8 h-4 w-4 rounded-full bg-(--accent) opacity-60" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-white/10" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Javeriana Lead Manager
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Tu futuro comienza
              <span className="block text-(--accent)">en la Javeriana</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/75 md:text-xl">
              Descubre programas de calidad y registra prospectos desde una experiencia moderna, clara y coherente con la identidad de la página.
            </p>
          </div>

          <Link
            to="/#programs"
            className="inline-flex items-center justify-center rounded-full bg-(--accent) px-7 py-4 text-sm font-semibold text-white transition hover:bg-[color-mix(in_oklab,var(--accent)_85%,white)]"
          >
            Explorar programas
          </Link>
        </div>
      </div>
    </section>
  );
};
