import { socialLinks } from "@/config/constants";
import { Group } from "@mantine/core";
import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { IconButton } from "../icon-button";
import { Copyright } from "./copyright";
import styles from "./footer.module.css";
import { PoweredBy } from "./powered-by";

export const Footer = ({ className, ...rest }: ComponentPropsWithoutRef<"footer">) => {
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
    <footer className={clsx(className, styles["container"])} {...rest}>
      <Group>
        {links.map((link, key) => (
          <a key={key} href={link.href} target="_blank" rel="noopener">
            <IconButton>{link.icon}</IconButton>
          </a>
        ))}
      </Group>
      <div className={styles["bottom"]}>
        <PoweredBy className={styles["hidden-mobile"]} />
        <Copyright />
      </div>
    </footer>
  );
};
