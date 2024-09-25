import {
  ElementProps,
  Anchor as MantineAnchor,
  AnchorProps as MantineAnchorProps,
} from "@mantine/core";
import clsx from "clsx";
import styles from "./anchor.module.css";

interface AnchorProps extends MantineAnchorProps, ElementProps<"a", keyof MantineAnchorProps> {
  active?: boolean;
}

const Anchor = ({ active, className, ...rest }: AnchorProps) => {
  return (
    <MantineAnchor
      underline="never"
      className={clsx(styles["container"], active && styles["active"])}
      {...rest}
    />
  );
};

export default Anchor;
