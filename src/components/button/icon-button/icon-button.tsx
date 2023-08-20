import { createStyles } from "@mantine/core";
import { ComponentPropsWithoutRef, FC, ReactElement, cloneElement } from "react";

type IconButtonProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  children: ReactElement;
};

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    color: theme.colors.dark[1],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
    cursor: "pointer",
    transition: "0.3s ease",
    "&:hover": {
      color: theme.white,
      backgroundColor: theme.colors.cyan[6],
    },
  },
  icon: {
    width: "50%",
    height: "50%",
  },
}));

const IconButton: FC<IconButtonProps> = ({ children }) => {
  const { cx, classes } = useStyles();

  const icon = cloneElement(children, { className: cx(children.props.className, classes.icon) });

  return <div className={classes.root}>{icon}</div>;
};

export default IconButton;
