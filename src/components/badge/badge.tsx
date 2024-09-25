import {
  ElementProps,
  Badge as MantineBadge,
  BadgeProps as MantineBadgeProps,
} from "@mantine/core";

// type BadgeProps = MantineBadgeProps;

interface BadgeProps extends MantineBadgeProps, ElementProps<"div", keyof MantineBadgeProps> {}

/**
 * Badgeコンポーネント
 * Mantine Badgeのラッパー
 */
const Badge = (props: BadgeProps) => {
  return (
    <MantineBadge variant="gradient" gradient={{ from: "blue", to: "teal" }} tt="none" {...props} />
  );
};

export default Badge;
