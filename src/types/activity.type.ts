import type { ReactNode } from "react";

export interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
  bgClass: string;
}