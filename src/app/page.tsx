import { socialLinks } from "@/config/constants";
import { Anchor } from "@/modules/common/components/anchor";
import { Copyright, PoweredBy } from "@/modules/common/components/footer";
import { IconButton } from "@/modules/common/components/icon-button";
import { Logo } from "@/modules/common/components/logo";
import { Center, Container, Group, Stack, Title } from "@mantine/core";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import styles from "./page.module.css";

const Page = () => {
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
  );
};

export default Page;
