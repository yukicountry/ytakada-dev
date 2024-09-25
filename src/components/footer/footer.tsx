import { socialLinks } from "@/config/constants";
import { Group } from "@mantine/core";
import React, { ComponentPropsWithoutRef } from "react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import IconButton from "../button/icon-button/icon-button";
import Copyright from "./copyright";
import styles from "./footer.module.css";
import PoweredBy from "./powered-by";
import clsx from "clsx";

// const useStyles = createStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     rowGap: "2rem",
//     alignItems: "center",
//     [theme.fn.largerThan("md")]: {
//       alignItems: "stretch",
//     },
//   },
//   bottom: {
//     display: "flex",
//     [theme.fn.largerThan("md")]: {
//       justifyContent: "space-between",
//     },
//   },
//   hiddenMobile: {
//     [theme.fn.smallerThan("md")]: {
//       display: "none",
//     },
//   },
// }));

const Footer = ({ className, ...rest }: ComponentPropsWithoutRef<"footer">) => {
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

export default Footer;
