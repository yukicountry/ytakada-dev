import React from "react";
import { Badge as MantineBadge, BadgeProps as MantineBadgeProps } from "@mantine/core";

type BadgeProps = MantineBadgeProps;

/**
 * Badgeコンポーネント
 * Mantine Badgeのラッパー
 */
const Badge: React.FC<BadgeProps> = ({ sx, ...rest }) => {
  return (
    <MantineBadge
      variant="gradient"
      gradient={{ from: "blue", to: "teal" }}
      sx={{ textTransform: "none", ...sx }}
      {...rest}
    />
  );
};

export default Badge;
