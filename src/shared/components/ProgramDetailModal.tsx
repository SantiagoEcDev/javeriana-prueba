import { useEffect } from "react";
import type { Program } from "../../features/programs/types/program.typs";

type Props = {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ProgramDetailModal = ({ program, isOpen, onClose }: Props) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleEnroll = () => {
    onClose();
    // Navigate to enrollment section
    const enrollmentSection = document.getElementById("enrollment");
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen || !program) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-(--bg-primary) shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent) text-white transition hover:bg-(--accent-hover)"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8">
          {/* Image section */}
          <div className="flex items-start justify-center">
            <div className="h-80 w-full overflow-hidden rounded-2xl md:sticky md:top-8">
              <img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Info section */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-(--accent)">
                {program.category}
              </span>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-(--text-primary)">
                {program.title}
              </h2>
            </div>

            <p className="text-base text-(--text-secondary)">
              {program.description}
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-(--bg-elevated) p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
                  Facultad
                </dt>
                <dd className="mt-2 text-sm font-semibold text-(--text-primary)">
                  {program.faculty}
                </dd>
              </div>

              <div className="rounded-xl bg-(--bg-elevated) p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
                  Duración
                </dt>
                <dd className="mt-2 text-sm font-semibold text-(--text-primary)">
                  {program.duration}
                </dd>
              </div>

              <div className="rounded-xl bg-(--bg-elevated) p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
                  Modalidad
                </dt>
                <dd className="mt-2 text-sm font-semibold text-(--text-primary)">
                  {program.modality}
                </dd>
              </div>

              <div className="rounded-xl bg-(--bg-elevated) p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
                  Inicio
                </dt>
                <dd className="mt-2 text-sm font-semibold text-(--text-primary)">
                  {program.startDate}
                </dd>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleEnroll}
              className="mt-4 rounded-xl bg-(--accent) px-6 py-3 text-base font-semibold text-white transition hover:bg-(--accent-hover)"
            >
              Inscribirse en este programa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
