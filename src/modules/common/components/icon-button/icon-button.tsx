import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactElement, cloneElement } from "react";
import styles from "./icon-button.module.css";

type IconButtonProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  children: ReactElement;
};

export const IconButton = ({ children }: IconButtonProps) => {
  const icon = cloneElement(children, { className: clsx(children.props.className, styles.icon) });

  return <div className={styles["container"]}>{icon}</div>;
};
