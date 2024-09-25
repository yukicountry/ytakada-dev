import { Burger, Container, Portal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import Footer from "../footer/footer";
import MenuMb from "../menu-mb/menu-mb";
import Menu, { MenuKind } from "../menu/menu";
import styles from "./layout.module.css";

type LayoutProps = {
  activeMenu?: MenuKind;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ activeMenu, children }) => {
  const [menuOpened, { toggle: toggleMenu }] = useDisclosure(false);

  return (
    <Container className={styles["container"]} size="lg">
      <main className={styles["main"]}>{children}</main>
      <Footer className={styles["footer"]} />
      <Portal>
        <Burger
          opened={menuOpened}
          className={clsx(styles["hidden-desktop"], styles["burger"])}
          onClick={toggleMenu}
        />
        <MenuMb
          activeMenu={activeMenu}
          className={clsx(
            styles["hidden-desktop"],
            styles["menu-mb"],
            menuOpened && styles["menu-mb-opened"],
          )}
        />
        <div className={clsx(styles["hidden-mobile"], styles["menu-container"])}>
          <Menu activeMenu={activeMenu} />
        </div>
      </Portal>
    </Container>
  );
};

export default Layout;
