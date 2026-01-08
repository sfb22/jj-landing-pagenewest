import { ReactNode } from "react";

export interface PersonalizationFeature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

export interface Story {
  id: number;
  name: string;
  description: string;
  image: string;
  rotation: string;
  translateY: string;
  journalTitle: string;
  journalContent: string;
  tags: string[];
}
