import { ComponentPropsWithoutRef, FC } from "react";
import { MenuKind } from "../menu/menu";
import { createStyles } from "@mantine/core";
import Anchor from "../anchor/anchor";
import ColorSchemeToggle from "../switch/color-scheme-toggle/color-scheme-toggle";

type MenuMbProps = ComponentPropsWithoutRef<"nav"> & {
  activeMenu?: MenuKind;
};

const useStyles = createStyles((theme) => ({
  menus: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "2rem",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));

const MenuMb: FC<MenuMbProps> = ({ activeMenu, className, ...rest }) => {
  const { cx, classes } = useStyles();

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
    {
      label: "Posts",
      href: "/posts",
      menuKind: MenuKind.Posts,
    },
    {
      label: "Projects",
      href: "/projects",
      menuKind: MenuKind.Projects,
    },
  ];

  return (
    <nav className={cx(classes.menus, className)} {...rest}>
      {navItems.map((item, key) => (
        <Anchor key={key} href={item.href} active={item.menuKind === activeMenu}>
          {item.label}
        </Anchor>
      ))}
      <ColorSchemeToggle />
    </nav>
  );
};

export default MenuMb;
