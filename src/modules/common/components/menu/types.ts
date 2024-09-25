export const menuKind = {
  home: "home",
  about: "about",
} as const;

export type MenuKind = (typeof menuKind)[keyof typeof menuKind];
