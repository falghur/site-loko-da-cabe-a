export type BenefitIcon =
  | "selection"
  | "transparency"
  | "personalized-service"
  | "financing";

export interface Benefit {
  title: string;
  description: string;
  icon: BenefitIcon;
  label?: string;
  demonstration?: boolean;
}
