export type NewGuestDTO = {
  name: string;
  surname: string;
  contact: number | "";
  attending: boolean | null;
  children: number;
  allergies?: string;
  notes?: string;
};
