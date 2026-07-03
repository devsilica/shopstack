export const collections = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Workspace",
] as const;

export type Collection = (typeof collections)[number];