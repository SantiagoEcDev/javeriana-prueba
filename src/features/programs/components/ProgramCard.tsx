import type { Program } from "../types/program.typs";

type Props = {
  program: Program;
  onViewDetails: (program: Program) => void;
};

export default function ProgramCard({ program, onViewDetails }: Props) {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) shadow-(--surface-shadow) transition-transform hover:-translate-y-1">

      <div className="h-48 w-full overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">

        <span className="text-xs font-bold uppercase tracking-[0.08em] text-(--accent)">
          {program.category}
        </span>

        <h3 className="line-clamp-2 text-lg font-extrabold leading-snug text-(--text-primary)">
          {program.title}
        </h3>

        <p className="line-clamp-2 text-sm text-(--text-secondary)">
          {program.description}
        </p>

        <dl className="mt-1 grid grid-cols-1 gap-1.5 rounded-xl bg-(--bg-elevated) p-3 text-xs">
          <div className="flex items-center justify-between gap-2">
            <dt className="font-semibold text-(--text-muted)">Facultad</dt>
            <dd className="text-right font-medium text-(--text-secondary)">{program.faculty}</dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="font-semibold text-(--text-muted)">Duración</dt>
            <dd className="text-right font-medium text-(--text-secondary)">{program.duration}</dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="font-semibold text-(--text-muted)">Modalidad</dt>
            <dd className="text-right font-medium text-(--text-secondary)">{program.modality}</dd>
          </div>
        </dl>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs font-medium text-(--text-muted)">
            Inicio: {program.startDate}
          </span>

          <button
            type="button"
            onClick={() => onViewDetails(program)}
            className="rounded-lg bg-(--accent) px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-(--accent-hover)"
          >
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}