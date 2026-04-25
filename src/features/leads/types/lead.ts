export type Lead = {
  id: string;
  fullName: string;
  email: string;
  programInterest: string;
  createdAt: string;
};

export type LeadFormValues = Pick<Lead, "fullName" | "email" | "programInterest">;
