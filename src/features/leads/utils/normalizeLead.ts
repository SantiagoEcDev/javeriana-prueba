import type { LeadFormValues } from "../types/lead";

const capitalizeWords = (value: string) =>
  value
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export const normalizeLead = (values: LeadFormValues) => {
  return {
    fullName: capitalizeWords(values.fullName),
    email: values.email.trim().toLowerCase(),
    programInterest: capitalizeWords(values.programInterest),
  };
};
