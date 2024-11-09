export type LocationData = {
  id?: number;
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  total_floors?: number;
  total_rooms?: number;
  opening_time?: string;
  closing_time?: string;
  description?: string;
};

export type FormValues = {
  fullName: string;
  phoneNumber: string;
  gender: string;
  numPeople: number;
  arrivalDate: string;
  arrivalTime: string;
  room: string; // Assuming you'll add more fields related to room and bed later
  bed: string;
  service: string[];
  note: string;
};
