import { useMemo } from "react";
import MainLayout from "../layout/MainLayout";
import { useLeadStorage } from "../../features/leads/hooks/useLeadStorage";
import type { Lead } from "../../features/leads/types/lead";

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));

const LeadCard = ({ lead }: { lead: Lead }) => (
  <article className="rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-5 shadow-(--surface-shadow)">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-lg font-bold text-(--text-primary)">{lead.fullName}</p>
        <p className="mt-1 text-sm text-(--text-secondary)">{lead.email}</p>
      </div>
      <span className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold text-(--accent)">
        Lead
      </span>
    </div>

    <div className="mt-4 rounded-xl bg-(--bg-elevated) p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
        Programa de interés
      </p>
      <p className="mt-1 text-sm font-medium text-(--text-primary)">{lead.programInterest}</p>
    </div>

    <p className="mt-4 text-xs text-(--text-muted)">
      Registrado el {formatDate(lead.createdAt)}
    </p>
  </article>
);

export default function LeadsPage() {
  const { leads, clearLeads } = useLeadStorage();
  const latestLead = leads[0];

  const stats = useMemo(
    () => [
      {
        label: "Leads totales",
        value: leads.length,
      },
      {
        label: "Último registro",
        value: latestLead
          ? new Intl.DateTimeFormat("es-CO", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(latestLead.createdAt))
          : "Sin registros",
      },
      {
        label: "Interés reciente",
        value: latestLead?.programInterest ?? "Sin datos",
      },
    ],
    [leads.length, latestLead],
  );

  return (
    <MainLayout>
      <section className="mb-8 overflow-hidden rounded-3xl border border-(--border-subtle) bg-linear-to-br from-(--bg-secondary) via-(--bg-elevated) to-(--bg-secondary) p-8 shadow-(--surface-shadow)">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-(--accent)">
          Gestión de leads
        </p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-(--text-primary)">
              Mis leads
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-(--text-secondary)">
              Aquí ves los prospectos registrados desde el formulario, organizados para revisar rápidamente su información.
            </p>
          </div>

          <button
            type="button"
            onClick={clearLeads}
            disabled={leads.length === 0}
            className="rounded-xl border border-(--border-subtle) bg-(--bg-secondary) px-5 py-3 text-sm font-semibold text-(--text-primary) transition hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-50"
          >
            Limpiar leads
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-5 shadow-(--surface-shadow)"
          >
            <p className="text-sm font-medium text-(--text-muted)">{stat.label}</p>
            <p className="mt-2 text-3xl font-extrabold text-(--text-primary)">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-6 shadow-(--surface-shadow)">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-(--text-primary)">
              Registro de prospectos
            </h2>
            <p className="mt-1 text-sm text-(--text-secondary)">
              Organizados de más reciente a más antiguo.
            </p>
          </div>
          <span className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold text-(--accent)">
            {leads.length} resultados
          </span>
        </div>

        {leads.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-(--border-subtle) bg-(--bg-elevated) px-6 py-10 text-center">
            <p className="text-4xl" aria-hidden="true">
              ✨
            </p>
            <h3 className="mt-3 text-xl font-bold text-(--text-primary)">
              Aún no hay leads registrados
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-(--text-secondary)">
              Cuando alguien complete el formulario de inscripción, aparecerá aquí con su información normalizada y persistida.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}
