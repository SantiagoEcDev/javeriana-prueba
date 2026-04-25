import { useCallback, useEffect, useMemo, useState } from "react";
import type { Lead } from "../types/lead";

const LEADS_STORAGE_KEY = "javeriana-leads";

const readStoredLeads = (): Lead[] => {
  if (typeof window === "undefined") return [];

  const storedLeads = window.localStorage.getItem(LEADS_STORAGE_KEY);

  if (!storedLeads) return [];

  try {
    const parsedLeads = JSON.parse(storedLeads) as Lead[];
    return Array.isArray(parsedLeads) ? parsedLeads : [];
  } catch {
    return [];
  }
};

export const useLeadStorage = () => {
  const [leads, setLeads] = useState<Lead[]>(() => readStoredLeads());

  useEffect(() => {
    window.localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  }, [leads]);

  const addLead = useCallback((lead: Lead) => {
    setLeads((current) => [lead, ...current]);
  }, []);

  const clearLeads = useCallback(() => {
    setLeads([]);
  }, []);

  const leadExists = useCallback(
    (email: string, programInterest: string) => {
      return leads.some(
        (lead) =>
          lead.email === email &&
          lead.programInterest === programInterest
      );
    },
    [leads]
  );

  return useMemo(
    () => ({ leads, addLead, clearLeads, leadExists }),
    [leads, addLead, clearLeads, leadExists]
  );
};