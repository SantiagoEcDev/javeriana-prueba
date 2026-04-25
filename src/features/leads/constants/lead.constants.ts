export const LEAD_INTEREST_OPTIONS = [
  { value: "Pregrado", label: "Pregrado" },
  { value: "Posgrado", label: "Posgrado" },
  { value: "Educación Continua", label: "Educación Continua" },
  { value: "Diplomados", label: "Diplomados" },
] as const;

export type LeadInterest = (typeof LEAD_INTEREST_OPTIONS)[number]["value"];
