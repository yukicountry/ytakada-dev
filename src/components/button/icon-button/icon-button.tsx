import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, ReactElement, cloneElement } from "react";
import styles from "./icon-button.module.css";

type IconButtonProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  children: ReactElement;
};

const IconButton = ({ children }: IconButtonProps) => {
  const icon = cloneElement(children, { className: clsx(children.props.className, styles.icon) });

  return <div className={styles["container"]}>{icon}</div>;
};

export default IconButton;
