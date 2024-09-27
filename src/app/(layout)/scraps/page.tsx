import { ScrapList } from "@/modules/features/scraps/components/scrap-list";
import { TagList } from "@/modules/features/scraps/components/tag-list";
import { SearchParams } from "@/utils/types/next";
import { Box, Group, Loader } from "@mantine/core";
import { Suspense } from "react";

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
  return (
    <Box component="main">
      <Group align="flex-start" mt="xl">
        <Box style={{ flex: 1 }}>
          <Suspense fallback={<Loader color="gray.5" />}>
            <ScrapList tags={extractTagsFromSearchParams(searchParams)} />
          </Suspense>
        </Box>
        <Box w={240}>
          <Suspense fallback={<Loader color="gray.5" />}>
            <TagList />
          </Suspense>
        </Box>
      </Group>
    </Box>
  );
};

export default Page;
