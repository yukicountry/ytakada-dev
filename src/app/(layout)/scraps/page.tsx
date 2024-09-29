import { Anchor } from "@/modules/common/components/anchor";
import { ScrapList } from "@/modules/features/scraps/components/scrap-list";
import { TagList } from "@/modules/features/scraps/components/tag-list";
import { SearchParams } from "@/utils/types/next";
import { Box, Grid, GridCol, Group, Skeleton, Title } from "@mantine/core";
import { Suspense } from "react";
import { TbChevronsLeft } from "react-icons/tb";

const extractTagsFromSearchParams = (searchParams: SearchParams) => {
  const tags = searchParams.tags;

  if (tags == null) {
    return [];
  }
  if (typeof tags === "string") {
    return [tags];
  }
  return tags;
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const tags = extractTagsFromSearchParams(searchParams);
  const title = tags.length < 1 ? "All Scraps" : tags.reduce((prev, tag) => `${prev} # ${tag}`, "");
  const toAllPosts =
    tags.length < 1 ? undefined : (
      <Anchor href={"/scraps"}>
        <Group gap="xs" mb="xl">
          <TbChevronsLeft />
          All Scraps
        </Group>
      </Anchor>
    );

  return (
    <Box component="main">
      {toAllPosts}
      <Title>{title}</Title>
      <Group align="flex-start" mt="xl" gap="xl">
        <Box style={{ flex: 1 }}>
          <Suspense
            fallback={
              <Grid gutter="xl">
                {Array(6)
                  .fill(0)
                  .map((scrap) => (
                    <GridCol span={{ base: 12, md: 6 }} key={scrap.slug}>
                      <Skeleton height={92} radius="md" />
                    </GridCol>
                  ))}
              </Grid>
            }
          >
            <ScrapList tags={tags} />
          </Suspense>
        </Box>
        <Box w={240}>
          <Suspense fallback={<Skeleton height={240} radius="md" />}>
            <TagList />
          </Suspense>
        </Box>
      </Group>
    </Box>
  );
};

export default Page;
