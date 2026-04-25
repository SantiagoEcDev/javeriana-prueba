export type Category = "Pregrado" | "Posgrado" | "Educación Continua";
export type Modality = "Presencial" | "Virtual" | "Híbrido";

export interface Program {
  id: number;
  title: string;
  description: string;
  category: Category;
  faculty: string;
  duration: string;
  modality: Modality;
  startDate: string;
  image: string;
}