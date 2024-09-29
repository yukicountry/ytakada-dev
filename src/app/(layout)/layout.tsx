"use client";

import { Footer } from "@/modules/common/components/footer";
import { MenuMb, MenuPc } from "@/modules/common/components/menu";
import { Box, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, { toggle: toggleMenuOpen }] = useDisclosure(false);

  return (
    <Container className={styles["container"]} size="lg">
      <Box className={styles["main"]}>{children}</Box>
      <Footer className={styles["footer"]} />
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
    </Container>
  );
};

export default Layout;
