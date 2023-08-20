import { socialLinks } from "@/config/constants";
import { Group, createStyles } from "@mantine/core";
import React, { ComponentPropsWithoutRef } from "react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import Copyright from "./copyright";
import PoweredBy from "./powered-by";
import IconButton from "../button/icon-button/icon-button";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "2rem",
    alignItems: "center",
    [theme.fn.largerThan("md")]: {
      alignItems: "stretch",
    },
  },
  bottom: {
    display: "flex",
    [theme.fn.largerThan("md")]: {
      justifyContent: "space-between",
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

type FooterProps = ComponentPropsWithoutRef<"footer">;

const Footer: React.FC<FooterProps> = ({ className, ...rest }) => {
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

  return (
    <footer className={cx(className, classes.root)} {...rest}>
      <Group>
        {links.map((link, key) => (
          <a key={key} href={link.href} target="_blank" rel="noopener">
            <IconButton>{link.icon}</IconButton>
          </a>
        ))}
      </Group>
      <div className={classes.bottom}>
        <PoweredBy className={classes.hiddenMobile} />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
