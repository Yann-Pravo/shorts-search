export type Short = {
  id: number;
  title: string;
  category: keyof typeof ShortType;
  thumbnail: string;
};

export enum ShortType {
  figma = "Figma",
  "ui-design" = "UI Design",
  "ux-design" = "UX Design",
  "design-system" = "Design Systems",
  "visual-design" = "Visual Design",
  career = "Career",
}
