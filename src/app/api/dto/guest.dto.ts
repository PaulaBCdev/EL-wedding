export type GuestResponse = {
  id: number;
  name: string;
  surname: string;
  contact: number;
  attending: boolean;
  children?: number;
  allergies?: string;
  notes?: string;
};
