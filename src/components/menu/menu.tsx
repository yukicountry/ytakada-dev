import { Card, Group } from "@mantine/core";
import { FC } from "react";
import Anchor from "../anchor/anchor";
import styles from "./menu.module.css";

export enum MenuKind {
  Home,
  About,
}

type MenuProps = {
  activeMenu?: MenuKind;
  className?: string;
};

const Menu: FC<MenuProps> = ({ activeMenu, ...rest }) => {
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
    <Card
      component="nav"
      px="1.5rem"
      shadow="sm"
      radius="xl"
      display="inline-block"
      withBorder={true}
      {...rest}
    >
      <Group align="center">
        {navItems.map((item, key) => (
          <Anchor
            key={key}
            href={item.href}
            className={styles["nav-item"]}
            active={item.menuKind === activeMenu}
          >
            {item.label}
          </Anchor>
        ))}
      </Group>
    </Card>
  );
};

export default Menu;
