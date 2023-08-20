import {
  AnchorProps as MantineAnchorProps,
  Anchor as MantineAnchor,
  createStyles,
} from "@mantine/core";
import { FC } from "react";

type AnchorProps = {
  href?: string;
  target?: string;
  active?: boolean;
  rel?: string;
} & MantineAnchorProps;

const useStyles = createStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "inherit",
    ":hover, &.active": {
      color: theme.colors.cyan[6],
      transition: "0.3s ease",
    },
  },
}));

const Anchor: FC<AnchorProps> = ({ active, className, ...rest }) => {
  const { classes, cx } = useStyles();

  return (
    <MantineAnchor underline={false} className={cx(classes.root, active && "active")} {...rest} />
  );
};

export default Anchor;
