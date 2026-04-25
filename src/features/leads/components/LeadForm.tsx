import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { leadSchema } from "../schemas/lead.schema";
import { normalizeLead } from "../utils/normalizeLead";
import type { LeadFormValues } from "../types/lead";
import { useLeadStorage } from "../hooks/useLeadStorage";

type ProgramOption = {
  label: string;
  value: string;
};

type LeadFormProps = {
  programOptions: ProgramOption[];
  selectedProgram?: string;
};

const DEFAULT_VALUES: LeadFormValues = {
  fullName: "",
  email: "",
  programInterest: "",
};

export const LeadForm = ({
  programOptions,
  selectedProgram,
}: LeadFormProps) => {
  const { leads, addLead, leadExists } = useLeadStorage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      ...DEFAULT_VALUES,
      programInterest: selectedProgram || "",
    },
    mode: "onTouched",
  });

  const onSubmit = handleSubmit((values) => {
    const normalizedLead = normalizeLead(values);

    if (leadExists(normalizedLead.email, normalizedLead.programInterest)) {
      toast.error("Ya tienes un lead para este programa");
      return;
    }

    addLead({
      id: crypto.randomUUID(),
      ...normalizedLead,
      createdAt: new Date().toISOString(),
    });

    toast.success("Lead agregado");
    reset(DEFAULT_VALUES);
  });

  const leadCount = leads.length;

  return (
    <section className="mt-12 rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-4 sm:p-6 shadow-(--surface-shadow)">
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-(--accent)">
          Captura de leads
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-(--text-primary)">
          Inscripción de interesados
        </h2>
        <p className="max-w-2xl text-sm text-(--text-secondary)">
          Completa el formulario para registrar prospectos. El correo debe
          pertenecer al dominio @javeriana.edu.co.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-(--text-secondary)">
            Nombre completo
          </span>
          <input
            type="text"
            placeholder="Ej. Ana María Pérez"
            className="w-full rounded-xl border border-(--border-subtle) bg-(--bg-elevated) px-4 py-3 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-muted) focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
            {...register("fullName")}
          />
          {errors.fullName && (
            <span className="text-xs font-medium text-red-500">
              {errors.fullName.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-(--text-secondary)">
            Correo institucional
          </span>
          <input
            type="email"
            placeholder="nombre@javeriana.edu.co"
            className="w-full rounded-xl border border-(--border-subtle) bg-(--bg-elevated) px-4 py-3 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-muted) focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs font-medium text-red-500">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-semibold text-(--text-secondary)">
            Programa de interés
          </span>
          <select
            className="w-full rounded-xl border border-(--border-subtle) bg-(--bg-elevated) px-4 py-3 text-sm text-(--text-primary) outline-none transition focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
            {...register("programInterest")}
          >
            <option value="" disabled>
              Selecciona un programa
            </option>
            {programOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {errors.programInterest && (
            <span className="text-xs font-medium text-red-500">
              {errors.programInterest.message}
            </span>
          )}
        </label>

        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          <p className="text-sm text-(--text-muted)">
            Leads guardados:{" "}
            <span className="font-semibold text-(--text-primary)">
              {leadCount}
            </span>
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto rounded-xl bg-(--accent) px-5 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Guardando..." : "Registrar lead"}
          </button>
        </div>
      </form>
    </section>
  );
};
