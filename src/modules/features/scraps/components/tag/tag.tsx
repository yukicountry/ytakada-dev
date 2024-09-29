import { Badge, BadgeProps, ElementProps } from "@mantine/core";
import { Tag as TagModel } from "../../types";

interface TagProps extends BadgeProps, ElementProps<"div", keyof BadgeProps> {
  tag: TagModel;
}

export const Tag = ({ tag, ...rest }: TagProps) => {
  return (
    <Badge tt="none" color="gray.7" {...rest}>
      {tag.name}
    </Badge>
  );
};
