import { Badge } from "@mantine/core";
import { Tag as TagModel } from "../../types";

export const Tag = ({ tag }: { tag: TagModel }) => {
  return (
    <Badge tt="none" color="gray.7">
      {tag.name}
    </Badge>
  );
};
