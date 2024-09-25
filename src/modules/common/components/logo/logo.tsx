import { ComponentPropsWithoutRef } from "react";

export const Logo = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 210 210"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <defs>
        <linearGradient id="e" x1="0" y1="0" x2="210" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5D4CD8" offset="0" />
          <stop stopColor="#76ECEE" offset="1" />
        </linearGradient>
      </defs>
      <circle cx="105" cy="105" r="95" fill="#6C9BD2" stroke="url(#e)" strokeWidth="5%" />
    </svg>
  );
};
