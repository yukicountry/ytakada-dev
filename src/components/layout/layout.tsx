import { Burger, Center, Container, Portal, createStyles } from "@mantine/core";
import { FC, ReactNode } from "react";
import Menu, { MenuKind } from "../menu/menu";
import Footer from "../footer/footer";
import MenuMb from "../menu-mb/menu-mb";
import { useDisclosure } from "@mantine/hooks";

type LayoutProps = {
  activeMenu?: MenuKind;
  children: ReactNode;
};

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    paddingBottom: "1rem",
    [theme.fn.smallerThan("md")]: {
      paddingTop: "4rem",
    },
    [theme.fn.largerThan("md")]: {
      paddingTop: "8rem",
    },
  },
  main: {
    flex: 1,
  },
  footer: {
    marginTop: "4rem",
  },
  menuContainer: {
    position: "fixed",
    padding: "2rem 0 1rem",
    width: "100%",
    top: 0,
    left: 0,
    backdropFilter: "blur(0.1rem)",
    display: "flex",
    justifyContent: "center",
  },
  burger: {
    position: "fixed",
    top: "0.5rem",
    right: "0.5rem",
    zIndex: 9000,
  },
  menuMb: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    visibility: "hidden",
    transition: "0.2s ease",
  },
  menuMbOpened: {
    opacity: 1,
    visibility: "visible",
  },
  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

const Layout: FC<LayoutProps> = ({ activeMenu, children }) => {
  const { cx, classes } = useStyles();
  const [menuOpened, { toggle: toggleMenu }] = useDisclosure(false);

  return (
    <Container className={classes.root} size="lg">
      <main className={classes.main}>{children}</main>
      <Footer className={classes.footer} />
      <Portal>
        <Burger
          opened={menuOpened}
          className={cx(classes.hiddenDesktop, classes.burger)}
          onClick={toggleMenu}
        />
        <MenuMb
          activeMenu={activeMenu}
          className={cx(classes.hiddenDesktop, classes.menuMb, menuOpened && classes.menuMbOpened)}
        />
        <div className={cx(classes.hiddenMobile, classes.menuContainer)}>
          <Menu activeMenu={activeMenu} />
        </div>
      </Portal>
    </Container>
  );
};

export default Layout;
