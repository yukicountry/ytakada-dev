import { Card, Group, Text } from "@mantine/core";
import { Tag as TagModel } from "../../types";
import { Tag } from "../tag";

export const TagList = ({ tags }: { tags: TagModel[] }) => {
  return (
    <Card radius="md" p="lg">
      <Text>Tags</Text>
      <Group gap="xs" mt="sm">
        {tags.map((tag) => (
          <a href={`/scraps?tags=${tag.name}`} key={tag.name}>
            <Tag tag={tag} />
          </a>
        ))}
      </Group>
    </Card>
  );
};
