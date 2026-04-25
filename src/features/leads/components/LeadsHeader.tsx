import { FiTrash2 } from "react-icons/fi";

type Props = {
  leadsCount: number;
  onClear: () => void;
};

export const LeadsHeader = ({ leadsCount, onClear }: Props) => {
  return (
    <section className="mb-8 overflow-hidden rounded-3xl border border-(--border-subtle) bg-linear-to-br from-(--bg-secondary) via-(--bg-elevated) to-(--bg-secondary) p-8 shadow-(--surface-shadow)">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-(--accent)">
        Gestión de leads
      </p>

      <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-(--text-primary)">
            Mis leads
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-(--text-secondary)">
            Revisa los prospectos registrados desde el formulario.
          </p>
        </div>

        <button
          onClick={onClear}
          disabled={leadsCount === 0}
          className="inline-flex items-center gap-2 rounded-xl border border-red-500/60 bg-transparent px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-500/10 hover:border-red-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiTrash2 className="text-base" />
          Limpiar leads
        </button>
      </div>
    </section>
  );
};