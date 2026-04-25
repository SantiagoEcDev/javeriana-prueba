import { z } from "zod";

const JAVERIANA_DOMAIN = "@javeriana.edu.co";

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Ingresa un nombre completo válido")
    .max(80, "El nombre es demasiado largo"),
  email: z
    .string()
    .trim()
    .email("Ingresa un correo válido")
    .refine((value) => value.toLowerCase().endsWith(JAVERIANA_DOMAIN), {
      message: "Usa un correo @javeriana.edu.co",
    }),
  programInterest: z
    .string()
    .trim()
    .min(3, "Selecciona un programa válido")
    .max(120, "El programa es demasiado largo"),
});

export type LeadSchema = z.infer<typeof leadSchema>;
