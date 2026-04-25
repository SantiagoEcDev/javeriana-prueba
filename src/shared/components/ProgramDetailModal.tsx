import { useEffect } from "react";
import type { Program } from "../../features/programs/types/program.typs";

type Props = {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ProgramDetailModal = ({ program, isOpen, onClose }: Props) => {
  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    html.classList.add("overflow-hidden");

    return () => {
      html.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen || !program) return null;

  return (
    <div
      className="fixed inset-0 z-50  mt-18 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-(--bg-primary) shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent) text-white transition hover:bg-(--accent-hover)"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <div className="h-64 w-full md:h-auto md:w-1/2">
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex max-h-[90vh] flex-1 flex-col overflow-y-auto p-6 md:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-(--accent)">
            {program.category}
          </span>

          <h2 className="mt-2 text-2xl font-extrabold text-(--text-primary) md:text-3xl">
            {program.title}
          </h2>

          <p className="mt-4 text-sm text-(--text-secondary)">
            {program.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-(--bg-elevated) p-4">
              <p className="text-xs uppercase text-(--text-muted)">Facultad</p>
              <p className="text-sm font-semibold text-(--text-primary)">
                {program.faculty}
              </p>
            </div>

            <div className="rounded-xl bg-(--bg-elevated) p-4">
              <p className="text-xs uppercase text-(--text-muted)">Duración</p>
              <p className="text-sm font-semibold text-(--text-primary)">
                {program.duration}
              </p>
            </div>

            <div className="rounded-xl bg-(--bg-elevated) p-4">
              <p className="text-xs uppercase text-(--text-muted)">Modalidad</p>
              <p className="text-sm font-semibold text-(--text-primary)">
                {program.modality}
              </p>
            </div>

            <div className="rounded-xl bg-(--bg-elevated) p-4">
              <p className="text-xs uppercase text-(--text-muted)">Inicio</p>
              <p className="text-sm font-semibold text-(--text-primary)">
                {program.startDate}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-(--accent) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-hover)"
          >
            Inscribirse en este programa
          </button>
        </div>
      </div>
    </div>
  );
};
