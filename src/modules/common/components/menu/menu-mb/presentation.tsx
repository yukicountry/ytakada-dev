import { Anchor } from "@/modules/common/components/anchor";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { menuKind, MenuKind } from "../types";
import styles from "./presentation.module.css";

export const MenuMb = ({
  activeMenu,
  className,
  ...rest
}: ComponentPropsWithoutRef<"div"> & { activeMenu?: MenuKind }) => {
  const navItems = [
    {
      label: "Home",
      href: "/",
      menuKind: menuKind.home,
    },
    {
      label: "About",
      href: "/about",
      menuKind: menuKind.about,
    },
  ];

  return (
    <nav className={clsx(styles["container"], className)} {...rest}>
      {navItems.map((item, key) => (
        <Anchor key={key} href={item.href} active={item.menuKind === activeMenu}>
          {item.label}
        </Anchor>
      ))}
    </nav>
  );
};
