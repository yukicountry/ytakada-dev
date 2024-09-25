import {
  ElementProps,
  Badge as MantineBadge,
  BadgeProps as MantineBadgeProps,
} from "@mantine/core";

interface BadgeProps extends MantineBadgeProps, ElementProps<"div", keyof MantineBadgeProps> {}

export const Badge = (props: BadgeProps) => {
  return (
    <MantineBadge variant="gradient" gradient={{ from: "blue", to: "teal" }} tt="none" {...props} />
  );
};
