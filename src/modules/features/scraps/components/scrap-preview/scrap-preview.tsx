import { Box, Group, Stack, Text } from "@mantine/core";
import { ScrapPreview as ScrapPreviewModel } from "../../types";
import { Tag } from "../tag";
import styles from "./scrap-preview.module.css";

export const ScrapPreview = ({ scrap }: { scrap: ScrapPreviewModel }) => {
  return (
    <Box component="a" href={`/scraps/${scrap.slug}`} className={styles["container"]}>
      <Group gap="xl">
        <Box className={styles["emoji-wrapper"]}>
          <span className={styles["emoji"]}>{scrap.emoji}</span>
        </Box>
        <Stack>
          <Text size="xl" fw="bold">
            {scrap.title}
          </Text>
          <Group gap="sm">
            {scrap.tags.map((tag) => (
              <Tag tag={tag} key={tag.name} />
            ))}
          </Group>
        </Stack>
      </Group>
    </Box>
  );
};
