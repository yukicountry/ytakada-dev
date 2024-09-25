"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { MenuPc as MenuPresentation } from "./presentation";

export const MenuPc = ({ className }: { className?: string }) => {
  const segment = useSelectedLayoutSegment();

  return <MenuPresentation className={className} />;
};
