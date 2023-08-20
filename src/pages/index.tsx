import Anchor from "@/components/anchor/anchor";
import IconButton from "@/components/button/icon-button/icon-button";
import Copyright from "@/components/footer/copyright";
import PoweredBy from "@/components/footer/powered-by";
import Logo from "@/components/images/logo";
import ColorSchemeToggle from "@/components/switch/color-scheme-toggle/color-scheme-toggle";
import { socialLinks } from "@/config/constants";
import { Center, Container, Group, Stack, Title, createStyles } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    height: "100dvh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    flex: 1,
    display: "flex",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
      rowGap: "2rem",
    },
    [theme.fn.largerThan("md")]: {
      columnGap: "4rem",
    },
  },
  stack: {
    [theme.fn.smallerThan("md")]: {
      alignItems: "center",
      "*": {
        textAlign: "center",
      },
    },
  },
  logo: {
    [theme.fn.smallerThan("md")]: {
      width: "8rem",
      height: "8rem",
    },
    [theme.fn.largerThan("md")]: {
      width: "12rem",
      height: "12rem",
    },
  },
  footer: {
    display: "flex",
    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
    },
    [theme.fn.largerThan("md")]: {
      justifyContent: "space-between",
    },
  },
  poweredBy: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

const Home: NextPage = () => {
  const { cx, classes } = useStyles();

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
    {
      href: "/posts",
      label: "Posts",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  return (
    <>
      <Head>
        <title>ytakada.dev</title>
      </Head>
      <main>
        <Container className={classes.root}>
          <Center className={classes.contentWrapper}>
            <Logo className={classes.logo} />
            <Stack className={classes.stack}>
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
          <footer className={classes.footer}>
            <PoweredBy className={classes.poweredBy} />
            <Copyright />
          </footer>
          <ColorSchemeToggle pos="absolute" top="1rem" right="1rem" />
        </Container>
      </main>
    </>
  );
};

export default Home;
