import type { Lead } from "../types/lead";
import { EmptyLeadsState } from "./EmptyLoadState";
import { LeadCard } from "./LeadCard";

type Props = {
  leads: Lead[];
};

export const LeadsListSection = ({ leads }: Props) => {
  return (
    <section className="mt-8 rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-6 shadow-(--surface-shadow)">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-(--text-primary)">
            Registro de prospectos
          </h2>
          <p className="text-sm text-(--text-secondary)">
            Ordenados de más reciente a más antiguo.
          </p>
        </div>

        <span className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold text-(--accent)">
          {leads.length} resultados
        </span>
      </div>

      {leads.length === 0 ? (
        <EmptyLeadsState />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </section>
  );
};