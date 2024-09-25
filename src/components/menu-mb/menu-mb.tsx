import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";
import Anchor from "../anchor/anchor";
import { MenuKind } from "../menu/menu";
import styles from "./menu-mb.module.css";

type MenuMbProps = ComponentPropsWithoutRef<"nav"> & {
  activeMenu?: MenuKind;
};

const MenuMb: FC<MenuMbProps> = ({ activeMenu, className, ...rest }) => {
  const navItems = [
    {
      label: "Home",
      href: "/",
      menuKind: MenuKind.Home,
    },
    {
      label: "About",
      href: "/about",
      menuKind: MenuKind.About,
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

export default MenuMb;
