import { useMemo } from "react";
import MainLayout from "../layout/MainLayout";
import { useLeadStorage } from "../../features/leads/hooks/useLeadStorage";
import { LeadsHeader } from "../../features/leads/components/LeadsHeader";
import { LeadsStatsSection } from "../../features/leads/components/LeadStatsSection";
import { LeadsListSection } from "../../features/leads/components/LeadListsSection";

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
      <LeadsHeader leadsCount={leads.length} onClear={clearLeads} />
      <LeadsStatsSection stats={stats} />
      <LeadsListSection leads={leads} />
    </MainLayout>
  );
}
