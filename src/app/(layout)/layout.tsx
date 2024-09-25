"use client";

import { Footer } from "@/modules/common/components/footer";
import { MenuMb, MenuPc } from "@/modules/common/components/menu";
import { Burger, Container, Portal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, { toggle: toggleMenuOpen }] = useDisclosure(false);

  return (
    <Container className={styles["container"]} size="lg">
      <main className={styles["main"]}>{children}</main>
      <Footer className={styles["footer"]} />
      <Portal>
        <Burger
          opened={isMenuOpen}
          className={clsx(styles["hidden-desktop"], styles["burger"])}
          onClick={toggleMenuOpen}
        />
        <MenuMb
          className={clsx(
            styles["hidden-desktop"],
            styles["menu-mb"],
            isMenuOpen && styles["menu-mb-opened"],
          )}
        />
        <div className={clsx(styles["hidden-mobile"], styles["menu-container"])}>
          <MenuPc />
        </div>
      </Portal>
    </Container>
  );
};

export default Layout;
