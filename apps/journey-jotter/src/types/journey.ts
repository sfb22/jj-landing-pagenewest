import { ReactNode } from "react";

export type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  startDate: Date;
  endDate: Date;
  nights: number;
};

export type Transport = {
  mode: string;
  icon: ReactNode;
};
