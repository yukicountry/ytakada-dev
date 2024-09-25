"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { MenuMb as MenuMbPresentation } from "./presentation";

export const MenuMb = ({ className }: { className?: string }) => {
  const segment = useSelectedLayoutSegment();

  return <MenuMbPresentation className={className} />;
};
