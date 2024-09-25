import Anchor from "@/components/anchor/anchor";
import IconButton from "@/components/button/icon-button/icon-button";
import Copyright from "@/components/footer/copyright";
import PoweredBy from "@/components/footer/powered-by";
import Logo from "@/components/images/logo";
import { socialLinks } from "@/config/constants";
import { Center, Container, Group, Stack, Title } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const links = [
    {
      href: socialLinks.github,
      icon: <TbBrandGithub />,
    },
    {
      href: socialLinks.linkedIn,
      icon: <TbBrandLinkedin />,
    },
    {
      href: socialLinks.mail,
      icon: <TbMail />,
    },
  ];

  const navItems = [
    {
      href: "/about",
      label: "About",
    },
  ];

  return (
    <>
      <Head>
        <title>ytakada.dev</title>
      </Head>
      <main>
        <Container className={styles["container"]}>
          <Center className={styles["content-wrapper"]}>
            <Logo className={styles["logo"]} />
            <Stack className={styles["stack"]}>
              <Title order={1}>Yuki Takada</Title>
              <Title order={2}>Software developer based in Tokyo.</Title>
              <Group>
                {navItems.map((item, key) => (
                  <Anchor key={key} href={item.href}>
                    {item.label}
                  </Anchor>
                ))}
              </Group>
              <Group>
                {links.map((link, key) => (
                  <a key={key} href={link.href} target="_blank" rel="noopener">
                    <IconButton>{link.icon}</IconButton>
                  </a>
                ))}
              </Group>
            </Stack>
          </Center>
          <footer className={styles["footer"]}>
            <PoweredBy className={styles["powered-by"]} />
            <Copyright />
          </footer>
        </Container>
      </main>
    </>
  );
};

export default Home;
