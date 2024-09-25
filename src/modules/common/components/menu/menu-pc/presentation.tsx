import { Anchor } from "@/modules/common/components/anchor";
import { Card, Group } from "@mantine/core";
import { MenuKind, menuKind } from "../types";
import styles from "./presentation.module.css";

export const MenuPc = ({ activeMenu, ...rest }: { activeMenu?: MenuKind; className?: string }) => {
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
