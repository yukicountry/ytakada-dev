import { Card, DefaultProps, Group, createStyles } from "@mantine/core";
import { FC } from "react";
import ColorSchemeToggle from "../switch/color-scheme-toggle/color-scheme-toggle";
import Anchor from "../anchor/anchor";

export enum MenuKind {
  Home,
  About,
  Posts,
  Projects,
}

type MenuProps = {
  activeMenu?: MenuKind;
} & DefaultProps;

const useStyles = createStyles(() => ({
  navItem: {
    display: "inline-block",
  },
}));

const Menu: FC<MenuProps> = ({ activeMenu, ...rest }) => {
  const { classes, cx } = useStyles();

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
            className={classes.navItem}
            active={item.menuKind === activeMenu}
          >
            {item.label}
          </Anchor>
        ))}
        <ColorSchemeToggle />
      </Group>
    </Card>
  );
};

export default Menu;
