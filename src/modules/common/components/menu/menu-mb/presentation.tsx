import { Anchor } from "@/modules/common/components/anchor";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { navItems } from "../data";
import styles from "./presentation.module.css";

export const MenuMb = ({
  activeMenu,
  className,
  ...rest
}: ComponentPropsWithoutRef<"div"> & { activeMenu?: string }) => {
  return (
    <nav className={clsx(styles["container"], className)} {...rest}>
      {navItems.map((item, key) => (
        <Anchor key={key} href={item.href} active={item.segment === activeMenu}>
          {item.label}
        </Anchor>
      ))}
    </nav>
  );
};
