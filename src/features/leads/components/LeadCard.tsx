import type { Lead } from "../types/lead";
import { formatDate } from "../utils/formDate";

type Props = {
  lead: Lead;
};

export const LeadCard = ({ lead }: Props) => {
  return (
    <article className="rounded-2xl border border-(--border-subtle) bg-(--bg-secondary) p-5 shadow-(--surface-shadow)">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-bold text-(--text-primary)">
            {lead.fullName}
          </p>
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
        <p className="mt-1 text-sm font-medium text-(--text-primary)">
          {lead.programInterest}
        </p>
      </div>

      <p className="mt-4 text-xs text-(--text-muted)">
        Registrado el {formatDate(lead.createdAt)}
      </p>
    </article>
  );
};
