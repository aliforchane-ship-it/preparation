
export enum ResourceCategory {
  LIBRARY = 'Bibliothèque Numérique',
  INFO = 'Informatique',
  MATHS = 'Mathématiques',
  ENGINEERING = 'Sciences de l\'Ingénieur (SI)',
  PHYSICS = 'Physique',
  DRIVE = 'Drives & Archives',
  CONCOURS = 'Annales & Concours'
}

export interface Resource {
  title: string;
  url: string;
  description?: string;
  category: ResourceCategory;
  important?: boolean;
}

export interface Advice {
  title: string;
  content: string;
  tags: string[];
}

export interface RamadanSlot {
  time: string;
  activity: string;
  focus: string;
  intensity: 'Low' | 'Medium' | 'High';
}
