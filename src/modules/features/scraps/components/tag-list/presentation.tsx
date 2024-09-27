import { Card, Stack, Text } from "@mantine/core";
import { Tag as TagModel } from "../../types";
import { Tag } from "../tag";
import Link from "next/link";

export const TagList = ({ tags }: { tags: TagModel[] }) => {
  return (
    <Card radius="md">
      <Text>Tags</Text>
      <Stack mt="md" gap="sm">
        {tags.map((tag, index) => (
          <Link href={`/scraps?tags=${tag.name}`} key={index}>
            <Tag tag={tag} />
          </Link>
        ))}
      </Stack>
    </Card>
  );
};
