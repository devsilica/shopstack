export const brands = [
  "NordHaus",
  "Studio Oak",
  "Forma Living",
  "Urban Nest",
  "Atelier Home",
  "Oak & Stone",
  "Luma Home",
  "Scandic Studio",
  "Casa Modern",
  "Haven Home",
] as const;

export type Brand = (typeof brands)[number];